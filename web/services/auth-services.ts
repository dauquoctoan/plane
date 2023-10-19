import { IResult } from '@/types';
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
            const result: IResult<IResultLoginGoogle> = await this.post('api/auth/sign-in', googleAuth);

            if (result?.code) {
                this.setAccessToken(result?.data?.access_token);
                this.setRefreshToken(result?.data?.refresh_token);
                return result.data;
            }
        } catch (error) {
            console.log(error);
        }
    }

    getUser(url: string) {
        return this.get(url).then((result) => result.data)
    }
}

const authService = new AuthService();
export default authService;