import api from "../../../api/api";

const Seri2Patch = async (id: string) => {
  const response = await api.patch(`/missions/${id}`);
  return response.data;
};

export default Seri2Patch;
