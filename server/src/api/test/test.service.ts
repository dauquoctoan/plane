import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base.service';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from './entities/test.entity';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { Test1 } from '../test1/entities/test1.entity';
import { User } from '../user/entitys/User.entity';

@Injectable()
export class TestService extends BaseService<Test> {
  constructor(@InjectModel(Test) repository: typeof Test) {
    super(repository)
  }

  async getTest1ByTest() {
    try {
      const result = await this.repository.findAll({ include: [{ model: Test1, as: 'author' }] })
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: 'vlxx', data: null, messageDetail: error, statusCode: 500 })
    }
  }
}
