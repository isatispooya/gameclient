import api from "../../../api/api";

const loginPost = async (mobile: string, code: string, name: string) => {
  const response = await api.post(`/login/`, {
    mobile,
    code,
    name,
  });
  return response.data;
};

export default loginPost;
