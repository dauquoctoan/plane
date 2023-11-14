import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) { }

  @Post()
  async create(@Body() createTestDto: CreateTestDto) {
    return handleResultSuccess(await this.testService.create(createTestDto));
  }

  @Get()
  async findAll() {
    return handleResultSuccess(await this.testService.getTest1ByTest());
  }
}
