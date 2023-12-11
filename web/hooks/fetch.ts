import APP_CONFIG from "@/configs";
import { BaseService } from "@/services/base-service";
import { IData } from "@/types";
import { useEffect, useState } from "react"

type apifetch = <T>(a: string | undefined) => Promise<T | undefined>;

const { API_BASE_URL } = APP_CONFIG;

export const useFetch = <T>(apifetch: apifetch, url?: string) => {
    const [data, setData] = useState<IData<T>>(undefined);

    const api = apifetch.bind(new BaseService(API_BASE_URL));

    const getData = async () => {
        const data: IData<T> = await api<T>(url);
        setData(data);
    }

    useEffect(() => {
        getData();
    }, [])

    return {
        data: data,
    }
}
