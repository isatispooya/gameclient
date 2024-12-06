import api from "../../../api/api";


const missionsGet = async () => {
    const response = await api.get('/missions/');
    return response.data;
};


export default missionsGet;
