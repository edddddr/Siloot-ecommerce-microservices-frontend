import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";
import type { Product } from "../types/product";

export const useProducts = () => {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};


