import { useMutation } from "@tanstack/react-query";
import { Seri2Patch } from "../services";

const useSeri2 = (id: string) => {
  return useMutation({
    mutationKey: ["seri2", id],
    mutationFn: (data: { score: number }) => Seri2Patch(id)(data),
  });
};

export default useSeri2;
