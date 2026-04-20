let accessToken: string | null = null;

export const setAccessToken = (token: string) => {
  accessToken = token;
  localStorage.setItem("access_token", token);
};

export const getAccessToken = () => {
  return accessToken || localStorage.getItem("access_token");
};

export const clearAuth = () => {
  accessToken = null;
  localStorage.removeItem("access_token");
};