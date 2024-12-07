import { useMutation } from "@tanstack/react-query";
import { Seri4Patch } from "../services";

const useSeri4 = (id: string) => {
  return useMutation({
    mutationKey: ["seri4", id],
    mutationFn: (data: { score: number }) => Seri4Patch(id)(data),
  });
};

export default useSeri4;
