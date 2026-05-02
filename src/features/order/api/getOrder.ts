import apiClient from "../../../services/apiClient";

export const getOrder = async (orderId: string) => {
  const response = await apiClient.get(`/orders/${orderId}`);
  return response.data;
};