import axios from "axios";
import { server } from "../../../api/server";

const otpSejam = async (uniqueIdentifier: string) => {
  const response = await axios.post(`${server}/otp-sejam/`, {
    uniqueIdentifier,
  });
  return response.data;
};
export default otpSejam;
