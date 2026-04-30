import apiClient from "../../../services/apiClient";

export const updateCart = async (id: string, data : {quantity: string}) => {
  const response = await apiClient.patch(`/cart/items/${id}/`, data);
  return response.data;
};