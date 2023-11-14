import { Injectable } from '@nestjs/common';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';
import { Test1 } from './entities/test1.entity';
import { Repository } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';
import { BaseService } from '../Base.service';
import { handleResultError, handleResultSuccess } from 'src/helper/handleresult';
import { Test } from '../test/entities/test.entity';

@Injectable()
export class Test1Service extends BaseService<Test1> {
  constructor(@InjectModel(Test1) public repository: Repository<Test1>) {
    super(repository);
  }


  async getTest1ByTest() {
    try {
      const result = await this.repository.findAll({ include: [Test] })
      return handleResultSuccess(result);
    } catch (error) {
      handleResultError({ message: 'vlxx', data: null, messageDetail: error, statusCode: 500 })
    }
  }
}
