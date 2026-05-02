import apiClient from "../../../services/apiClient";
import type { OrderItem } from "../types/index"


export const createOrder = async (user_id: string, items: OrderItem[]) => {
  const response = await apiClient.post("/orders/", {
    user_id,
    items,
  });
  return response.data;
};
