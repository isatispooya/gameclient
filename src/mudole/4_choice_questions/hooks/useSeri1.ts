import { useMutation } from "@tanstack/react-query";
import { Seri1Patch } from "../services";
import useMissionsGet from "../../missions/hooks/useMissionsGet";

const useSeri1 = (id: string) => {
  const { refetch } = useMissionsGet();
  return useMutation({
    mutationKey: ["seri1", id],
    mutationFn: (data: { score: number }) => Seri1Patch(id)(data),
    onSuccess: () => {
      refetch();
    },
  });
};

export default useSeri1;
