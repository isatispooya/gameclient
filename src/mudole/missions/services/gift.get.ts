import api from "../../../api/api";

export interface GiftResponse {
    user_rank: number;
    user_score: number;
    available_gifts: string[];
}

const giftGet = async (): Promise<GiftResponse> => {
    const response = await api.get('gift/');
    return response.data;
}

export default giftGet;
