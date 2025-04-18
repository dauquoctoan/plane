import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ModuleMemberService } from '../service/ModuleMember.service';
import {
  CreateModuleMemberDto,
  UpdateModuleMemberDto,
} from '../dto/ModuleMember.dto';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('module-member')
@ApiTags('Module Member')
export class ModuleMemberController {
  constructor(private readonly moduleMemberService: ModuleMemberService) {}
  @Post()
  create(@Body() module: CreateModuleMemberDto) {
    return handleResultSuccess(this.moduleMemberService.create(module));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.moduleMemberService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.moduleMemberService.findOneById(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() module: UpdateModuleMemberDto) {
    return handleResultSuccess(this.moduleMemberService.updateById(id, module));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.moduleMemberService.removeById(id));
  }
}
