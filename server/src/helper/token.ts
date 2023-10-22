import { Request } from 'express';

export const createToken = (refreshToken: string, accessToken: string) => {

}

export function extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    const result = type === 'Bearer' ? token : undefined;
    return result;
}