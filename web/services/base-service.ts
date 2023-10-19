import { COOKIE_TIME_EXPRIRES, KEY_COOKIE_AUTH_ACCESS_TOKEN, KEY_COOKIE_AUTH_REFRESH_TOKEN } from "@/constants/services-constants";
import axios from "axios";
import Cookie from "js-cookie";
import qs from "qs";

export class BaseService {
    protected headers: any = {};
    constructor(readonly baseURL: string) { }

    getAccessToken() {
        return Cookie.get(KEY_COOKIE_AUTH_ACCESS_TOKEN)
    }

    setAccessToken(token: string = '') {
        return Cookie.set(KEY_COOKIE_AUTH_ACCESS_TOKEN, token, { expires: COOKIE_TIME_EXPRIRES });
    }

    getRefreshToken() {
        return Cookie.get(KEY_COOKIE_AUTH_REFRESH_TOKEN)
    }

    setRefreshToken(token: string = '') {
        return Cookie.set(KEY_COOKIE_AUTH_REFRESH_TOKEN, token, { expires: COOKIE_TIME_EXPRIRES });
    }

    getHeaders() {
        return {
            Authorization: `Bearer ${this.getAccessToken()}`,
        };
    }

    get(url: string, config = {}) {
        return axios({
            method: "get",
            url: this.baseURL + url,
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        }).then((res) => res.data);
    }

    post(url: string, data = {}, config = {}) {
        return axios({
            method: "post",
            url: this.baseURL + url,
            data: qs.stringify(data),
            headers: this.getAccessToken() ? this.getHeaders() : {},
            ...config,
        }).then((res) => res.data);
    }

    put(url: string, config = {}) {
        // return axios({
        //     method: "put",
        //     url: this.baseURL + url,
        //     headers: this.getAccessToken() ? this.getHeaders() : {},
        //     ...config,
        // });
    }

    delete(url: string, config = {}) {
        // return axios({
        //     method: "delete",
        //     url: this.baseURL + url,
        //     headers: this.getAccessToken() ? this.getHeaders() : {},
        //     ...config,
        // });
    }
}