import { useMutation } from "@tanstack/react-query";
import { otpPost } from "../services";

export const useOtp = () => {
  return useMutation({
    mutationKey: ["otp"],
    mutationFn: otpPost,
  });
};

export default useOtp;
