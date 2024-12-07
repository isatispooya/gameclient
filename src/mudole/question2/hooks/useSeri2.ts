import { useMutation } from "@tanstack/react-query";
import { Seri2Patch } from "../services";
import useMissionsGet from "../../missions/hooks/useMissionsGet";

const useSeri2 = (id: string) => {
  const { refetch } = useMissionsGet();
  return useMutation({
    mutationKey: ["seri2", id],
    mutationFn: (data: { score: string }) => Seri2Patch(id)(data),
    onSuccess: () => {
      refetch();
    },
  });
};

export default useSeri2;
