import { useQuery } from "@tanstack/react-query";
import { missionsGet } from "../services";


const useMissionsGet = () => {
    const { data: missions ,isPending} = useQuery({
        queryKey: ['missions-map'],
        queryFn:missionsGet,
    });

    return {missions,isPending};
};


export default useMissionsGet;
