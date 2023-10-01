import { Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';
import { StateService } from './state.service';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';

@Controller('state')
export class StateController {
    constructor(private readonly stateService: StateService) {}

    @Post()
    createState(@Body() createStateDto: CreateStateDto): any{
        return this.stateService.create(createStateDto);
    }
  
    @Get()
    findAll() {
      return this.stateService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.stateService.findOne(+id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateWorkspaceDto: UpdateStateDto) {
      return this.stateService.update(+id, updateWorkspaceDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.stateService.remove(+id);
    }
}
