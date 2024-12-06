import axios from "axios";
import { API_BASE_URL } from "../../../api/server";

const loginPost = async (mobile: string, code: string, name: string) => {
  const response = await axios.post(`${API_BASE_URL}/login/`, {
    mobile,
    code,
    name,
  });
  return response.data;
};

export default loginPost;
