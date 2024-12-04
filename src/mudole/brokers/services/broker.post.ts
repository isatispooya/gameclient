import api from "../../../api/api";

const brokerPost = async () => {
  const response = await api.post("/missions/broker/");
  return response.data;
};

export default brokerPost;
