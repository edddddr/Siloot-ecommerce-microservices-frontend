import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCart } from "../api/updateCart";

export const useUpdateCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: { quantity: string } }) =>
      updateCart(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};