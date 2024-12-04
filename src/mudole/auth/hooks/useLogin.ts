import { useMutation } from "@tanstack/react-query";
import { loginPost } from "../services";
import { setCookie } from "../../../api/cookie";

const useLogin = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (params: { mobile: string; code: string; name: string }) =>
      loginPost(params.mobile, params.code, params.name),
    onSuccess: (data) => {
      setCookie("access_token", data.tokens.access);
      console.log(data);
      console.log(data.tokens.access)
    },
  });
};

export default useLogin;
