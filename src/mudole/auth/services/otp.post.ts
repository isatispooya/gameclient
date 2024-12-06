import { API_BASE_URL } from "../../../api/server";
import axios from "axios";

const otpPost = async (mobile: string) => {
  const response = await axios.post(`${API_BASE_URL}/otp/`, {
    mobile,
  });
  return response.data;
};

export default otpPost;
