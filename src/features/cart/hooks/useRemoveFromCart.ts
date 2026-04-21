import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../api/removeFromCart";

export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};