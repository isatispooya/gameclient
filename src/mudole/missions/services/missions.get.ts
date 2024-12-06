import api from "../../../api/api";
import { MissionsGet } from "../types/missions-get.type";

const missionsGet = async (): Promise<MissionsGet> => {
    const response = await api.get('/show-user-mission/');
    return response.data;
};


export default missionsGet;
