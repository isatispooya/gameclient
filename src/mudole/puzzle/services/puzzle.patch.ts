import api from "../../../api/api";

const PuzzlePatch =
  (id: string) =>
  async ({ score }: { score: number }) => {
    const response = await api.patch(`/missions/${id}/`, {
      score: score,
    });
    return response.data;
  };
export default PuzzlePatch;
