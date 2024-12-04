import axios from "axios";
import { server } from "../../../api/server";

const verifyOtpSejam = async (otp: string, uniqueIdentifier: string) => {
  const response = await axios.post(`${server}/verify-otp-sejam/`, {
    uniqueIdentifier,
    otp,
  });

  return response.data;
};

export default verifyOtpSejam;
