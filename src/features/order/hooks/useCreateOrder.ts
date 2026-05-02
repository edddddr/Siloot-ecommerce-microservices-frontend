import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../api/createOrder";
import type { OrderItem } from "../types/index"

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: ({ user_id, items }: { user_id: string; items: OrderItem[] }) => createOrder(user_id, items),
  });
};