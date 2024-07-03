import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Sequelize } from 'sequelize-typescript';
import { sendMail } from './helper/sendmail';

@Injectable()
@ApiTags('app')
export class AppService {
  constructor(private sequelize: Sequelize) {}

  getHello(): string {
    return 'Hello Mấy cưng!';
  }
}
