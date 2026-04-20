import apiClient from "../../../services/apiClient";

export const refreshToken = async (refresh: string) => {
  const response = await apiClient.post("/auth/refresh/", { refresh });
  return response.data;
};