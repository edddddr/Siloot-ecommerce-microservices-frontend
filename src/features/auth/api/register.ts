import apiClient from "../../../services/apiClient";

export const register = async (data: {
  email: string;
  password: string;
}) => {
  const response = await apiClient.post("/auth/register/", data);
  return response.data;
};