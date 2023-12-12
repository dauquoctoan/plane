import { ApiTags } from '@nestjs/swagger';
import { ModuleIssueService } from '../service/ModuleIssue.service';
import { CreateModuleIssueDto, UpdateModuleIssueDto } from '../dto/ModuleIssue.dto';
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('module-issue')
@ApiTags('Module Issue')
export class ModuleIssueController {
    constructor(private readonly moduleIssueService: ModuleIssueService) { }
    @Post()
    create(@Body() module: CreateModuleIssueDto) {
        return handleResultSuccess(this.moduleIssueService.create(module));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.moduleIssueService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.moduleIssueService.findOneById(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() module: UpdateModuleIssueDto) {
        return handleResultSuccess(this.moduleIssueService.updateById(id, module));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.moduleIssueService.removeById(id));
    }
}
