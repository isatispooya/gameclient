import { useQuery } from "@tanstack/react-query";
import { scoreGet } from "../services";
const useScoreGet = () => {
  return useQuery({
    queryKey: ["score"],
    queryFn: scoreGet,
  });
};

export default useScoreGet;
