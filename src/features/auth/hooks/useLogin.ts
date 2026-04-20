import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { setTokens } from "../store/auhtStore";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setTokens(data.access, data.refresh);
    },
  });
};