import api from "../../../api/api";

const UploadPicPost = (id: string) => async ({ file }: { file: File }) => {
  const response = await api.patch(`/missions/${id}/`, { file });
  return response.data;
};

export default UploadPicPost;

