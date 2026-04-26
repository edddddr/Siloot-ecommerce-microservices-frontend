import apiClient from "../../../services/apiClient";

export const register = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) => {
  const response = await apiClient.post("/auth/register/", data);
  return response.data;
};  