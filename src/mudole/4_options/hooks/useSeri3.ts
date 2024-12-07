import { useMutation } from "@tanstack/react-query";
import { Seri3Patch } from "../services";
import useMissionsGet from "../../missions/hooks/useMissionsGet";
const useSeri3 = (id: string) => {
  const { refetch } = useMissionsGet();
  return useMutation({
    mutationKey: ["seri3", id],
    mutationFn: (data: { score: number }) => Seri3Patch(id)(data),
    onSuccess: () => {
      refetch();
    },
  });
};

export default useSeri3;
