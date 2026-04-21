import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/getCart";

export const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
};