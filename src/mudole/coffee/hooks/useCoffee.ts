import { useMutation } from "@tanstack/react-query";
import { CoffeePatch } from "../services";

const useCoffee = (id: string) => {
  return useMutation({
    mutationKey: ["coffee", id],
    mutationFn: (data: { score: number }) => CoffeePatch(id)(data),
  });
};

export default useCoffee;
