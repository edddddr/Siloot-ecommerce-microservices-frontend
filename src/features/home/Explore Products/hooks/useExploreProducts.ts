import { useQuery } from "@tanstack/react-query";
import { getExploreProducts } from "../api/getExplorProducts";

export const useExploreProducts = () => {
  return useQuery({
    queryKey: ["explore-products"],
    queryFn: getExploreProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};



