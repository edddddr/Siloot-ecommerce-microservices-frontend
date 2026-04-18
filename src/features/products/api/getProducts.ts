import apiClient from "../../../services/apiClient";
import type { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await apiClient.get("/products");
  return response.data;
};