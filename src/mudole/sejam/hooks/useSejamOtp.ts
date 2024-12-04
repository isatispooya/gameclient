import { useMutation } from "@tanstack/react-query";
import { otpSejam } from "../services";

const useSejamOtp = () => {
  const { mutate: otpSejamMutate } = useMutation({
    mutationKey: ["otpSejam"],
    mutationFn: otpSejam,
  });

  return { otpSejamMutate };
};

export default useSejamOtp;
