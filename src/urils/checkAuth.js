import { getCookie } from "./getCookie.js";

export const checkAuth = () => {
  const isLoggedIn = getCookie("accessToken");

  return Boolean(isLoggedIn);
};
