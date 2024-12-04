import { useQuery } from "@tanstack/react-query";
import { missionsGet } from "../services";

const useMissions = () => {
  return useQuery({
    queryKey: ["missions"],
    queryFn: missionsGet,
  });
};

export default useMissions;
