import { useMutation } from "@tanstack/react-query";
import { SafePatch } from "../services";

const useSafe = (id: string) => {
  return useMutation({
    mutationKey: ["safe", id],
    mutationFn: (data: { password: string }) => SafePatch(id)(data),
  });
};

export default useSafe;
