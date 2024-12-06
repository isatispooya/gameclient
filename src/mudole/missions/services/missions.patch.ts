import api from "../../../api/api";

const missionsPatch = async () => {
  const response = await api.patch(`/missions/`);
  return response.data;
};

export default missionsPatch;
