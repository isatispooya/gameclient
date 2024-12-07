import { useMutation } from "@tanstack/react-query";
import { PuzzlePatch } from "../services";
import useMissionsGet from "../../missions/hooks/useMissionsGet";
const usePuzzle = (id: string) => {
  const { refetch } = useMissionsGet();
  const mutation = useMutation({
    mutationKey: ["puzzle", id],
    mutationFn: (data: { score: number }) => PuzzlePatch(id)(data),
    onSuccess: () => {
      refetch();
    },
  });
  return mutation;
};
export default usePuzzle;
