import { useMutation } from "@tanstack/react-query";
import { Seri4Patch } from "../services";
import useMissionsGet from "../../missions/hooks/useMissionsGet";

const useSeri4 = (id: string) => {
  const { refetch } = useMissionsGet();
  return useMutation({
    mutationKey: ["seri4", id],
    mutationFn: (data: { score: number }) => Seri4Patch(id)(data),
    onSuccess: () => {
      refetch();
    },
  });
};

export default useSeri4;
