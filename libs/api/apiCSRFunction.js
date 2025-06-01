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
