import { useMutation } from "@tanstack/react-query";
import { UploadPicPost } from "../services";

const usePostPic = () => {
  return useMutation({
    mutationKey: ["uploadpic"],
    mutationFn: UploadPicPost,
  });
};

export default usePostPic;
