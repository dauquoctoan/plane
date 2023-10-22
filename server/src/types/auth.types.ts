export interface IToken {
    payload: {
        id: string,
        email: string
    },
    iat: number,
    exp: number
}