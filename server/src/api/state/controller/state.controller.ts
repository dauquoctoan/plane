import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { StateService } from '../service/State.service';
import { CreateStateDto, UpdateStateDto } from '../dto/State.dto';
import jstz from 'jstz';
import { ApiTags } from '@nestjs/swagger';

@Controller('state')
@ApiTags('state')
export class StateController {
  constructor(private readonly stateService: StateService) { }

  @Post()
  createState(@Body() createStateDto: CreateStateDto): any {
    return this.stateService.create(createStateDto);
  }

  @Get()
  findAll() {
    const timezone = jstz.determine();
    return timezone.name();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateStateDto) {
    return this.stateService.updateById(+id, updateWorkspaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stateService.removeById(+id);
  }
}
