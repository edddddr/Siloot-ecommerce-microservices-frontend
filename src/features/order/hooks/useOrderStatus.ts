import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../api/getOrder";

export const useOrderStatus = (orderId: string | null) => {
  return useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(orderId!),
    enabled: !!orderId,
    refetchInterval: 3000, // poll every 3 seconds
  });
};