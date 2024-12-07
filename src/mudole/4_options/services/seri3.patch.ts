import api from "../../../api/api";

const Seri3Patch = async (id: string) => {
  const response = await api.patch(`/missions/${id}`);
  return response.data;
};

export default Seri3Patch;
