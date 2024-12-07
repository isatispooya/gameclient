import api from "../../../api/api";

 const Seri1Patch = (id: string) => async ({ score }: { score: number }) => {
  const response = await api.patch(`/missions/${id}/`, { score });
  return response.data;
};

export default Seri1Patch;
