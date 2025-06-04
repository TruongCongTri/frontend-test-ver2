const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_LOCAL_URL;

/**
 * Wrapper for fetch with CSR support.
 */
export async function fetchCSRFromAPI(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });
  const contentType = res.headers.get("content-type");
  const isJson = contentType?.includes("application/json");
  const responseData = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    const errorObj = new Error(
      responseData?.message || `Fetch error ${res.status}`
    );

    errorObj.code = responseData?.statusCode || res.status;
    errorObj.details = responseData?.error || responseData;
    errorObj.stack = ""; // 🔇 Hide ugly stack traces in UI

    throw errorObj;
  }

  return responseData;
}
