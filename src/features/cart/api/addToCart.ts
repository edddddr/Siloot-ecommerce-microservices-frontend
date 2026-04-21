import apiClient from "../../../services/apiClient";

export const addToCart = async (data: {
  product_id: string;
  quantity: number;
}) => {
  const response = await apiClient.post("/cart/items/", data);
  return response.data;
};