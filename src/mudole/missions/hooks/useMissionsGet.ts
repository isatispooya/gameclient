import { useQuery } from '@tanstack/react-query';
import { missionsGet } from '../services';

export default function useMissionsGet() {
    return useQuery({
        queryKey: ['missions'],
        queryFn: missionsGet
    });
}
