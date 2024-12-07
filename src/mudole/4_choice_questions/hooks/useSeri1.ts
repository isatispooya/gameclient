import { useMutation } from "@tanstack/react-query";
import { Seri1Patch } from "../services";

const useSeri1 = (id: string) => {
  return useMutation({
    mutationKey: ["seri1", id],
    mutationFn: (data: { score: number }) => Seri1Patch(id)(data),
  });
};

export default useSeri1;
