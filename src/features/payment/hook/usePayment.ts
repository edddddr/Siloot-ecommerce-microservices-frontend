import { useMutation } from "@tanstack/react-query";
import { processPayment } from "../api/proccessPayment";

export const usePayment = () => {
  return useMutation({
    mutationFn: processPayment,
  });
};