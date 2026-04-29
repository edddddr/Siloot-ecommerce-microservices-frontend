// features/products/api/getExploreProducts.ts

import apiClient from "../../../../services/apiClient";
import type { Product } from "../types";


export const getExploreProducts = async (): Promise<Product[]> => {
  const res = await apiClient.get(
    "/products/explore/?limit=8"
  );

  return res.data.results;
};

