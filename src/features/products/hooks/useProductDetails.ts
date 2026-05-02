import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/getProduct";

export const useProductDetails = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id, // Only run if ID is present
  });
};