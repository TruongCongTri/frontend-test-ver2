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
    cache: "no-store", // disable caching for fresh data
    ...options,
  });
  if (res.status === 403) {
    // You can either redirect or throw
    const error = new Error("GitHub API blocked");
    error.code = 403;
    throw error;
  }
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Fetch error ${res.status}: ${error}`);
  }

  return res.json();
}
