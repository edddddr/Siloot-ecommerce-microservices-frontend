import apiClient from "../../../services/apiClient";

export const getCart = async () => {
  const response = await apiClient.get("/cart/");
  return response.data;
};