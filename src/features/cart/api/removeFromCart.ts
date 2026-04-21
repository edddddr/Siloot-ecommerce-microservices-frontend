import apiClient from "../../../services/apiClient";

export const removeFromCart = async (itemId: string) => {
  await apiClient.delete(`/cart/items/${itemId}/remove/`);
};