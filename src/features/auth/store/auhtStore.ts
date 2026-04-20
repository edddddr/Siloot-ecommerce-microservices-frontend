let accessToken: string | null = localStorage.getItem("access_token");
let refreshTokenValue: string | null = localStorage.getItem("refresh_token");

export const setTokens = (access: string, refresh: string) => {
  accessToken = access;
  refreshTokenValue = refresh;

  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
};

export const getAccessToken = () => accessToken;
export const getRefreshToken = () => refreshTokenValue;

export const clearAuth = () => {
  accessToken = null;
  refreshTokenValue = null;

  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};