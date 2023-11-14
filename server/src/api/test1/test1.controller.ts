import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Test1Service } from './test1.service';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller()
export class Test1Controller {
  constructor(private readonly test1Service: Test1Service) { }

  @Post()
  async create(@Body() createTest1Dto: CreateTest1Dto) {
    return handleResultSuccess(await this.test1Service.create(createTest1Dto));
  }

  @Get()
  async findAll() {
    return handleResultSuccess(await this.test1Service.getTest1ByTest());
  }
}
