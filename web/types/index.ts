export interface IResult<T> {
    code: number
    data: T
    message: string
    statusCode: number
}
