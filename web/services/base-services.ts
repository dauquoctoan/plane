import axios, { AxiosInstance } from "axios";
import { COOKIE_TIME_EXPRIRES, KEY_COOKIE_AUTH_ACCESS_TOKEN, KEY_COOKIE_AUTH_REFRESH_TOKEN } from "@/constants/services-constants";
import Cookie from "js-cookie";
import queryString from 'query-string';


export interface IQuery {
    [k: string]: string
}

class BaseSerive {
    instance: AxiosInstance;
    constructor(baseUrl: string) {
        this.instance = axios.create({
            baseURL: baseUrl
        });
        this.instance.defaults.headers.common['Authorization'] = this.getAccessToken();
        this.instance.defaults.headers.post['Content-Type'] = 'application/json';
        this.instance.interceptors.response.use(function (response) {
            if (response.data.code) return response;
            return Promise.reject('');
        }, function (error) {
            return Promise.reject(error);
        })
    }

    getAccessToken() {
        return Cookie.get(KEY_COOKIE_AUTH_ACCESS_TOKEN);
    }

    getRefreshToken() {
        return Cookie.get(KEY_COOKIE_AUTH_REFRESH_TOKEN);
    }

    parseUrl(url: string, query?: IQuery): string {
        return queryString.stringifyUrl({ url: url, query });
    }

    get<T>(url: string, query?: IQuery) {
        return this.instance.get<T>(this.parseUrl(url, query));
    }
}
