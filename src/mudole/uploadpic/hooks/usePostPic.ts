import { useMutation } from "@tanstack/react-query";
import { UploadPicPost } from "../services";

const usePostPic = (id: string) => {
  return useMutation({
    mutationKey: ["uploadpic", id],
    mutationFn: (data: { file: File }) => UploadPicPost(id)(data),
  });
};

export default usePostPic;
