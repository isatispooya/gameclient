import { useMutation } from "@tanstack/react-query";
import { otpSejam } from "../services";

const useSejamOtp = () => {
  const { mutateAsync: otpSejamMutate } = useMutation<string, Error, string>({
    mutationFn: (nationalCode: string) => otpSejam(nationalCode)
  });

  return { otpSejamMutate };
};

export default useSejamOtp;
