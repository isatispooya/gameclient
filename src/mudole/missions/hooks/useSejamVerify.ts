import { useMutation } from "@tanstack/react-query";
import verifyOtpSejam from "../../sejam/services/verifyotp";

const useSejamVerify = () => {
  const { mutate: verifyOtpSejamMutate } = useMutation({
    mutationKey: ["verifyOtpSejam"],
    mutationFn: (params: { otp: string; uniqueIdentifier: string }) =>
      verifyOtpSejam(params.otp, params.uniqueIdentifier),
  });

  return { verifyOtpSejamMutate };
};

export default useSejamVerify;
