import api from "../../../api/api";

const SafePatch = (id: string) => async (data: { password: string }) => {
  const response = await api.patch(`/missions/${id}/`, { password: data.password });
  return response.data;
};

export default SafePatch;
