import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiTokenService } from '../service/ApiToken.service';
import { CreateAPITokenDto, UpdateAPITokenDto } from '../dto/APIToken.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('api-token')
@ApiTags('Api Token')
export class ApiTokenController {
  constructor(private readonly apiTokenService: ApiTokenService) {}
  @Post()
  create(@Body() apiToken: CreateAPITokenDto) {
    return handleResultSuccess(this.apiTokenService.create(apiToken));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.apiTokenService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.apiTokenService.findOneById(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() apiToken: UpdateAPITokenDto) {
    return handleResultSuccess(this.apiTokenService.updateById(id, apiToken));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.apiTokenService.removeById(id));
  }
}
