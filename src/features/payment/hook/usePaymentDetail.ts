import { useQuery } from "@tanstack/react-query";
import { getPaymentDetail } from "../api/getPaymentDetail";

export const usePaymentDetail = (orderId: string | null) => {
  return useQuery({
    queryKey: ["payment", orderId],
    queryFn: () => getPaymentDetail(orderId!),
    enabled: !!orderId,
    refetchInterval: 3000,
  });
};