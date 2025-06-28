/**
 * Smoobu API Pass-through with Caching
 *
 * This endpoint acts as a proxy to hide Smoobu API keys while providing caching.
 *
 * Caching Behavior:
 * - GET requests: Cached for 5 minutes
 * - POST requests: Never cached
 * - Cache bypass: Add ?_refresh=true or ?cache=false to any request
 * - Cache size: Limited to 100 entries max
 * - Cache headers: Includes X-Cache header (HIT/MISS/BYPASS)
 *
 * Usage:
 * - Set 'api-path' header to specify which Smoobu endpoint to call
 * - Query parameters and request body are forwarded as-is
 * - All headers except API key are preserved
 */

import { headers } from "next/headers";

// In-memory cache with TTL
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds
const MAX_CACHE_SIZE = 100; // Prevent memory issues

// Clean up expired cache entries
function cleanupCache() {
  const now = Date.now();
  for (const [key, value] of cache.entries()) {
    if (now > value.expiry) {
      cache.delete(key);
    }
  }

  // If still too large, remove oldest entries
  if (cache.size > MAX_CACHE_SIZE) {
    const entries = Array.from(cache.entries()).sort((a, b) => a[1].expiry - b[1].expiry);
    const toRemove = entries.slice(0, cache.size - MAX_CACHE_SIZE);
    toRemove.forEach(([key]) => cache.delete(key));
  }
}

// Generate cache key from path and query params
function getCacheKey(path, queryParams) {
  return `${path}${queryParams}`;
}

// Check if request has cache-busting parameter
function shouldBypassCache(searchParams) {
  return searchParams.includes("_refresh=true") || searchParams.includes("cache=false");
}

export const runtime = "edge";

export async function GET(request) {
  const headersList = await headers();
  const baseUrl = process.env.SMOOBU_BASE_URL;
  const path = headersList.get("api-path");
  const queryParams = new URL(request.url).search;
  const finalUrl = baseUrl + path + queryParams;

  // Generate cache key
  const cacheKey = getCacheKey(path, queryParams);

  // Clean up expired entries periodically
  if (cache.size > 50) {
    // Clean up when cache gets large
    cleanupCache();
  }

  // Check if cache should be bypassed
  const bypassCache = shouldBypassCache(queryParams);

  // Check cache first (unless bypassed)
  const now = Date.now();
  const cached = cache.get(cacheKey);

  if (!bypassCache && cached && now < cached.expiry) {
    console.log(`Cache hit for: ${path}${queryParams}`);

    // Return cached response with appropriate headers
    return new Response(cached.data, {
      status: cached.status,
      statusText: cached.statusText,
      headers: {
        ...cached.headers,
        "Cache-Control": "public, max-age=300", // 5 minutes
        "X-Cache": "HIT",
      },
    });
  }

  console.log(`Cache ${bypassCache ? "bypassed" : "miss"} for: ${path}${queryParams}`);

  // Fetch from Smoobu API
  const res = await fetch(finalUrl, {
    headers: {
      "Api-Key": process.env.SMOOBU_API_KEY,
    },
  });

  // Only cache successful responses
  if (res.ok) {
    const responseData = await res.text();
    const responseHeaders = {};

    // Copy relevant headers (excluding some that shouldn't be cached)
    res.headers.forEach((value, key) => {
      if (!["set-cookie", "cache-control", "expires", "date"].includes(key.toLowerCase())) {
        responseHeaders[key] = value;
      }
    });

    // Store in cache (unless bypassed)
    if (!bypassCache) {
      cache.set(cacheKey, {
        data: responseData,
        status: res.status,
        statusText: res.statusText,
        headers: responseHeaders,
        expiry: now + CACHE_TTL,
      });
    }

    // Return response with appropriate cache headers
    return new Response(responseData, {
      status: res.status,
      statusText: res.statusText,
      headers: {
        ...responseHeaders,
        "Cache-Control": bypassCache ? "no-cache" : "public, max-age=300", // 5 minutes
        "X-Cache": bypassCache ? "BYPASS" : "MISS",
      },
    });
  }

  // Don't cache error responses, just return them
  return res;
}

export async function POST(request) {
  const headersList = await headers();
  const baseUrl = process.env.SMOOBU_BASE_URL;
  const requestBody = await request.json();
  const path = headersList.get("api-path");

  console.log(`POST request to: ${path}`);

  const res = await fetch(baseUrl + path, {
    method: "POST",
    headers: {
      "Api-Key": process.env.SMOOBU_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });

  // Add headers to prevent caching of POST responses
  const responseData = await res.text();

  return new Response(responseData, {
    status: res.status,
    statusText: res.statusText,
    headers: {
      ...Object.fromEntries(res.headers.entries()),
      "Cache-Control": "no-store, no-cache, must-revalidate",
      "X-Cache": "BYPASS",
    },
  });
}
