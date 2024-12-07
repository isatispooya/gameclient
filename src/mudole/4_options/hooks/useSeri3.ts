import { useMutation } from "@tanstack/react-query";
import { Seri3Patch } from "../services";

const useSeri3 = () => {
  return useMutation({
    mutationKey: ["seri3"],
    mutationFn: Seri3Patch,
  });
};

export default useSeri3;
