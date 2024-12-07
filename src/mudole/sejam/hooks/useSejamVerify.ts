import { useMutation } from "@tanstack/react-query";
import verifyOtpSejam from "../services/verifyotp";
import useMissionsGet from "../../missions/hooks/useMissionsGet";
const useSejamVerify = () => {
  const { refetch } = useMissionsGet();
  const { mutate: verifyOtpSejamMutate, isPending } = useMutation({
    mutationKey: ["verifyOtpSejam"],
    mutationFn: (params: { otp: string; uniqueIdentifier: string }) =>
      verifyOtpSejam(params.otp, params.uniqueIdentifier),
    onSuccess: () => {
      refetch();
    },
  });

  return { verifyOtpSejamMutate, isPending };
};

export default useSejamVerify;
