import { useMutation } from "@tanstack/react-query";
import { CoffeePatch } from "../services";
import useMissionsGet from "../../missions/hooks/useMissionsGet";

const useCoffee = (id: string) => {
  const { refetch } = useMissionsGet();
  return useMutation({
    mutationKey: ["coffee", id],
    mutationFn: (data: { score: number }) => CoffeePatch(id)(data),
    onSuccess: () => {
      refetch();
    },
  });
};

export default useCoffee;
