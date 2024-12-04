import api from "../../../api/api";

const verifyOtpSejam = async (otp: string, uniqueIdentifier: string) => {
  const response = await api.post(`/verify-otp-sejam/`, {
    uniqueIdentifier,
    otp,
  });

  return response.data;
};

export default verifyOtpSejam;
