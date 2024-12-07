import { useMutation } from "@tanstack/react-query";
import { Seri3Patch } from "../services";

const useSeri3 = (id: string) => {
  return useMutation({
    mutationKey: ["seri3", id],
    mutationFn: (data: { score: number }) => Seri3Patch(id)(data),
  });
};

export default useSeri3;
