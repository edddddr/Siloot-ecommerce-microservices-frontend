import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";
import { setAccessToken } from "../store/auhtStore";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setAccessToken(data.access);
    },
  });
};