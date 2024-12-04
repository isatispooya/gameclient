import { useMutation } from "@tanstack/react-query";
import { brokerPost } from "../services";

const useBrokerPost = () => {
  return useMutation({
    mutationKey: ["broker"],
    mutationFn: brokerPost,
  });
};

export default useBrokerPost;
