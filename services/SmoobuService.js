// Use for Smoobu Api calls using our serverless proxy

const PROXY_URL = "/api/smoobu";

export async function getCustomerId() {
  try {
    const smoobuCustomerResponse = await fetch(PROXY_URL, {
      method: "GET",
      headers: {
        "api-path": "/api/me",
      },
    });
    const data = await smoobuCustomerResponse.json();
    return data.id;
  } catch (error) {
    console.error(error);
  }
}

export async function makeGetQuery(path, queryString = "") {
  try {
    const smoobuResponse = await fetch(PROXY_URL + queryString, {
      method: "GET",
      headers: {
        "api-path": path,
      },
    });
    const data = await smoobuResponse.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// TODO: Probably remove this functionality both here and in the pass through proxy
// Potentailly dangerous to have this in the codebase
export async function makePostQuery(path, requestBody) {
  try {
    const smoobuResponse = await fetch(PROXY_URL, {
      method: "POST",
      headers: {
        "api-path": path,
      },
      body: JSON.stringify(requestBody),
    });
    const data = await smoobuResponse.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
