import { server } from "../../../api/server";
import axios from "axios";

const otpPost = async (mobile: string) => {
  const response = await axios.post(`${server}/otp/`, {
    mobile,
  });
  return response.data;
};

export default otpPost;
