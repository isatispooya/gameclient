import { useQuery } from "@tanstack/react-query";
import { missionsGet } from "../services";


const useMissionsGet = () => {
    const { data: missions } = useQuery({
        queryKey: ['missions-map'],
        queryFn:missionsGet,
    });

    return missions;
};


export default useMissionsGet;
