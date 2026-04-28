import apiClient from "../../../services/apiClient";
import type { Category, CursorResponse } from "../types/index";


export const getCategories = async (cursor?: string): Promise<CursorResponse<Category>> => {
  const url = cursor ? `/categories/?cursor=${cursor}` : "/categories/";
  
  const response = await apiClient.get(url);
  return response.data;
};