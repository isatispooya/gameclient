import { server } from "../../../api/server";
import axios from "axios";

const loginPost = async (mobile: string, code: string, name: string) => {
  const response = await axios.post(`${server}/login/`, {
    mobile,
    code,
    name,
  });
  return response.data;
};

export default loginPost;
