import api from "../../../api/api";

const otpSejam = async (uniqueIdentifier: string) => {
  const response = await api.post(`/otp-sejam/`, {
    uniqueIdentifier,
  });
  return response.data;
};
export default otpSejam;
