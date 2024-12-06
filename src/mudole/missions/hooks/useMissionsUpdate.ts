import { useMutation } from "@tanstack/react-query";
import missionsPatch from "../services/missions.patch";

const useMissionsUpdate = (id: string) => {
  return useMutation({
    mutationKey: ["missions"],
    mutationFn: () => missionsPatch(id),
  });
};

export default useMissionsUpdate;
