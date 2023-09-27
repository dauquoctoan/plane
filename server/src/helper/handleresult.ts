import { HttpException, HttpStatus } from "@nestjs/common";

const handleResultError = (error:Omit<IResult,'code'>):void =>{
    throw new HttpException({
        code: 0,
        statusCode: error.statusCode,
        message: error.message,
        messageDetail: error.messageDetail
    }, error.statusCode, {
        cause: error
    });
}

const handleResultSuccess = (data:any):IResult =>{
    return {
        code: 1,
        statusCode: 200,
        data: data || [],
        message: 'Sucess',
    }
}

export {handleResultError, handleResultSuccess}