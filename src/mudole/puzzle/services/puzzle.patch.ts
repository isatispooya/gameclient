import api from "../../../api/api";

const PuzzlePatch =
  (id: string) =>
  async ({ file }: { file: File }) => {
    const response = await api.patch(`/mission/${id}/`, {
      file: file,
    });
    return response.data;
  };
export default PuzzlePatch;
