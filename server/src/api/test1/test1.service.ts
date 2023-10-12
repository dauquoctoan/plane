import { Injectable } from '@nestjs/common';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';
import { Test1 } from './entities/test1.entity';
import { Repository } from 'sequelize-typescript';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class Test1Service {
  constructor(@InjectModel(Test1) public repository: Repository<Test1>) { }

  create(createTest1Dto: CreateTest1Dto) {
    return 'This action adds a new test1';
  }

  findAll() {
    return `This action returns all test1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test1`;
  }

  update(id: number, updateTest1Dto: UpdateTest1Dto) {
    return `This action updates a #${id} test1`;
  }

  remove(id: number) {
    return `This action removes a #${id} test1`;
  }
}
