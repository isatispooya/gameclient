import { useMutation } from "@tanstack/react-query";
import missionsPatch from "../services/missions.patch";

const useMissions = (id: string) => {
  return useMutation({
    mutationKey: ["missions"],
    mutationFn: () => missionsPatch(id),
  });
};

export default useMissions;
