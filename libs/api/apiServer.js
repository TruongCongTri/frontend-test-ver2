import { fetchISRFromAPI } from "./apiISRFunction";
import { fetchSSRFromAPI } from "./apiSSRFunction";

import { API_ENDPOINTS } from "./endpoints";

// server-side rendering (SSR) function
// GITHUB
export const searchGithubUsers = (params) => {
  const query = new URLSearchParams(params).toString();

  return fetchSSRFromAPI(
    `${API_ENDPOINTS.GITHUB.SEARCH_USERS}?q=${params.q}&page=${
      params.page || 1
    }&per_page=${params.per_page || 10}`
  );
};

// AUTH
export const createAccessCode = (payload) =>
  fetchSSRFromAPI(API_ENDPOINTS.AUTH.CREATE_CODE, {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const validateAccessCode = (payload) =>
  fetchSSRFromAPI(API_ENDPOINTS.AUTH.VALIDATE_CODE, {
    method: "POST",
    body: JSON.stringify(payload),
  });

// USER
export const likeGithubUser = (payload) =>
  fetchSSRFromAPI(API_ENDPOINTS.USER.LIKE_GITHUB_USER, {
    method: "POST",
    body: JSON.stringify(payload),
  });

export const getUserProfile = (phone_number) =>
  fetchSSRFromAPI(
    `${API_ENDPOINTS.USER.GET_USER_PROFILE}?phone_number=${phone_number}`
  );

export const getLikedGithub = (phone_number) =>
  fetchSSRFromAPI(
    `${API_ENDPOINTS.USER.GET_LIKED_GITHUB}?phone_number=${phone_number}`
  );

// incremental static regeneration (ISR) function
