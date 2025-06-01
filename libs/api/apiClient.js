import { fetchCSRFromAPI } from "./apiCSRFunction";
import { API_ENDPOINTS } from "./endpoints";
export function createAccessCode(payload) {
  return fetchCSRFromAPI(`${API_ENDPOINTS.AUTH.CREATE_CODE}`, {
    method: "POST",
    body: payload,
  });
}

export function validateAccessCode(payload) {
  return fetchCSRFromAPI(`${API_ENDPOINTS.AUTH.VALIDATE_CODE}`, {
    method: "POST",
    body: payload,
  });
}

export function searchGithubUsers(params) {
  const query = new URLSearchParams(params).toString();
  return fetchCSRFromAPI(`${API_ENDPOINTS.GITHUB.SEARCH_USERS}?${query}`);
}

export function findGithubUserProfile(github_user_id) {
  return fetchCSRFromAPI(
    `${API_ENDPOINTS.GITHUB.USER_PROFILE}?github_user_id=${github_user_id}`
  );
}

// LIKE a GitHub user (POST)
export function likeGithubUser(payload) {
  return fetchCSRFromAPI(API_ENDPOINTS.USER.LIKE_GITHUB_USER, {
    method: "POST",
    body: payload,
  });
}

// GET current user profile
export function getUserProfile(phone_number) {
  return fetchCSRFromAPI(
    `${API_ENDPOINTS.USER.GET_USER_PROFILE}?phone_number=${phone_number}`
  );
}

// GET liked GitHub users ids by phone number
export function getLikedGithub(phone_number) {
  return fetchCSRFromAPI(
    `${API_ENDPOINTS.USER.GET_LIKED_GITHUB}?phone_number=${phone_number}`
  );
}
