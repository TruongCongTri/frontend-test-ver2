import { API_ENDPOINTS } from "./endpoints";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_LOCAL_URL;

/**
 * Wrapper for fetch with SSR support.
 */
export async function fetchSSRFromAPI(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: "no-store",
    ...options,
  });

  const contentType = res.headers.get("content-type");
  const isJson = contentType?.includes("application/json");
  // const responseData = isJson ? await res.json() : await res.text();
  let responseData;
  try {
    responseData = isJson ? await res.json() : await res.text();
  } catch (e) {
    console.error("Failed to parse response:", e); // Add this for parsing errors
    responseData = await res.text(); // Fallback to text
  }

  // console.log("Raw response status:", res.status);
  // console.log("Raw response data:", responseData);

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
