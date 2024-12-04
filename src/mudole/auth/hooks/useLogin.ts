import { useMutation } from "@tanstack/react-query";
import { loginPost } from "../services";

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (params: { mobile: string; code: string; name: string }) =>
      loginPost(params.mobile, params.code, params.name),
  });
};

export default useLogin;
