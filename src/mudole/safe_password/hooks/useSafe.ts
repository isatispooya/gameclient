import { useMutation } from "@tanstack/react-query";
import { SafePatch } from "../services";
import useMissionsGet from "../../missions/hooks/useMissionsGet";

const useSafe = (id: string) => {
  const { refetch } = useMissionsGet();
  return useMutation({
    mutationKey: ["safe", id],
    mutationFn: (data: { password: string }) => SafePatch(id)(data),
    onSuccess: () => {
      refetch();
    },
  });
};

export default useSafe;
