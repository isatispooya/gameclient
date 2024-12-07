import { useQuery } from '@tanstack/react-query';
import { giftGet } from '../services';
import { GiftResponse } from '../services/gift.get';

export default function useGiftGet() {
    return useQuery<GiftResponse>({
        queryKey: ['gift'],
        queryFn: giftGet
    });
}
