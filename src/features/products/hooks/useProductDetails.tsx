import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/getProduct";

export const useProductDetails = (slug: string) => {
  return useQuery({
    queryKey: ["product", slug],
    queryFn: () => fetchProduct(slug),
    enabled: !!slug, // Only run if ID is present
  });
};