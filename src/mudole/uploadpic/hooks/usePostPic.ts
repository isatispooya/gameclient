import { useMutation } from "@tanstack/react-query";
import { UploadPicPost } from "../services";
import useMissionsGet from "../../missions/hooks/useMissionsGet";

const usePostPic = (id: string) => {
  const { refetch } = useMissionsGet();
  return useMutation({
    mutationKey: ["uploadpic", id],
    mutationFn: (data: { file: File }) => UploadPicPost(id)(data),
    onSuccess: () => {
      refetch();
    },
  });
};

export default usePostPic;
