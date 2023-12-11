import { IResult, IUser } from '@/types';
import { BaseService } from './base-service';
import APP_CONFIG from '@/configs';

const { API_BASE_URL } = APP_CONFIG;

export interface IGoogleAuth {
    idToken: string;
    type: 'google' | 'github';
}

export interface IResultLoginGoogle {
    access_token: string;
    refresh_token: string;
}

class AuthService extends BaseService {
    constructor() {
        super(API_BASE_URL);
    }

    async singInGoogle(googleAuth: IGoogleAuth) {
        try {
            const result = await this.post<IResultLoginGoogle>('auth/sign-in', googleAuth);
            result && this.setAccessToken(result?.access_token);
            result && this.setRefreshToken(result.refresh_token);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    getUser<T>() {
        try {
            return this.get<T>('me');
        } catch (error) {
            console.log(error)
        }
    }

    upDateUser<T>(user: IUser) {
        try {
            return this.patch<T>('user', user);
        } catch (error) {
            console.log(error)
        }
    }
}

const authService = new AuthService();
export default authService;