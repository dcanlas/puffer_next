import { headers } from "next/headers";

export const dynamic = 'force-dynamic'; // static by default, unless reading the request
export const runtime = 'edge';
 
export async function GET(request) {
  const headersList = await headers();
  const baseUrl = process.env.SMOOBU_BASE_URL;
  const path = headersList.get('api-path');
  const queryParams = new URL(request.url).search;
  const finalUrl = baseUrl + path + queryParams;

  const res = await fetch(finalUrl , {
    headers: {
      'Api-Key': process.env.SMOOBU_API_KEY,
    },
  }); 

  return res;
}

export async function POST(request) {
  const headersList = await headers();
  const baseUrl = process.env.SMOOBU_BASE_URL;
  const requestBody = await request.json();
  const path = headersList.get('api-path');

  const res = await fetch(baseUrl + path, {
    method: 'POST',
    headers: {
      'Api-Key': process.env.SMOOBU_API_KEY,
    },
    body: JSON.stringify(requestBody),
  });

  return res;
} 
