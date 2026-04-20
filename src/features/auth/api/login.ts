import apiClient from "../../../services/apiClient";

export const login = async (data: {
  email: string;
  password: string;
}) => {
  const response = await apiClient.post("/auth/login/", data);
  return response.data;
};