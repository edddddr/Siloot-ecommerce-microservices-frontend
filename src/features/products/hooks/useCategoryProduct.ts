import { useQuery } from "@tanstack/react-query";
import { getProductBycategory } from "../api/getProductByCategory";

export const useCategoryProducts = (id: string, cursor: string | null) => {
  return useQuery({
    queryKey: ["products", "category", id, cursor],
    queryFn: () => getProductBycategory(id, cursor),
    enabled: !!id,
    placeholderData: (previousData) => previousData,
  });
};