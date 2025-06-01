import { API_ENDPOINTS } from "./endpoints";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_LOCAL_URL;

/**
 * Wrapper for fetch with ISR support.
 */
export async function fetchISRFromAPI(path, options = {}) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    // 🔁 ISR enabled here:
    next: {
      revalidate: options.revalidate ?? 84600, // default to 24h
    },
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

// GITHUB
export const searchGithubUsers = (params) => {
  const query = new URLSearchParams(params).toString();
  return fetchISRFromAPI(`${API_ENDPOINTS.GITHUB.SEARCH_USERS}?${query}`);
};

export const findGithubUserProfile = (id) => {
  return fetchISRFromAPI(
    `${API_ENDPOINTS.GITHUB.USER_PROFILE}?github_user_id=${id}`
  );
};
