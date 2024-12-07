import api from "../../../api/api";

const Seri2Patch = (id: string) => async ({ score }: { score: string }) => {
  const response = await api.patch(`/missions/${id}/`, { score });
  return response.data;
};

export default Seri2Patch;
