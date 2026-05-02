import apiClient from "../../../services/apiClient";

export const getPaymentDetail = async (orderId: string) => {
  const response = await apiClient.get(`/payments/${orderId}/`);
  return response.data;
};