import { useMutation } from "@tanstack/react-query";
import { PuzzlePatch } from "../services";

const usePuzzle = (id: string) => {
  const mutation = useMutation({
    mutationKey: ["puzzle", id],
    mutationFn: (data: { score: number }) => PuzzlePatch(id)(data),
  });
  return mutation;
};
export default usePuzzle;
