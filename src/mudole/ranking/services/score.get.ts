import { api } from "../../../api/api";
import { RankingType } from "../types";


const scoreGet = async (): Promise<RankingType> => {
  const response = await api.get(`/missions/`);
  return response.data;
};

export default scoreGet;
