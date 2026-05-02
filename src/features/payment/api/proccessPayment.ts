import apiClient from "../../../services/apiClient";

export const processPayment = async (data: {
  order_id: string;
  amount: number;
}) => {
  const response = await apiClient.post("/payments", data);
  return response.data;
};