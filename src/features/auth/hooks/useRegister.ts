import { useMutation } from "@tanstack/react-query";
import { register } from "../api/register";

interface UseRegisterOptions {
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
  
}

export const useRegister = (options?: UseRegisterOptions) => {

  return useMutation({
    mutationFn: register,

    onSuccess: (data) => {
      // If you have a user cache, you could invalidate it here
      // queryClient.invalidateQueries({ queryKey: ['user'] });
      
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: (error) => {
      if (options?.onError) {
        options.onError(error);
      }
    },
    
  });
};