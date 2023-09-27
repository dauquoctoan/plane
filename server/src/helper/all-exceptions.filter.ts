import { Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { response } from 'express';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    super.catch(exception, host);
  }
}