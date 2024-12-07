import { useMutation } from "@tanstack/react-query";
import { Seri1Patch } from "../services";

const useSeri1 = (id: string) => {
  return useMutation({
    mutationKey: ["seri1", id],
    mutationFn: () => Seri1Patch(id),
  });
};

export default useSeri1;
