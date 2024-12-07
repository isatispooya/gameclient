import { useMutation } from "@tanstack/react-query";
import { Seri2Patch } from "../services";

const useSeri2 = () => {
  return useMutation({
    mutationKey: ["seri2"],
    mutationFn: Seri2Patch,
  });
};

export default useSeri2;
