import api from "../../../api/api";

const missionsPatch = async (id: string) => {
  const response = await api.patch(`/missions/${id}/`);
  return response.data;
};

export default missionsPatch;
