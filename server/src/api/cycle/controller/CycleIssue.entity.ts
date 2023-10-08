import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CycleIssueService } from '../service/CycleIssue.entity';
import { CreateCycleIssueDto, UpdateCycleIssueDto } from '../dto/CycleIssue.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('cycle-issue')
@ApiTags('Cycle Issue')
export class CycleIssueController {
    constructor(private readonly cycleIssueService: CycleIssueService) { }
    @Post()
    create(@Body() cycleIssue: CreateCycleIssueDto) {
        return this.cycleIssueService.create(cycleIssue);
    }

    @Get()
    findAll() {
        return this.cycleIssueService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cycleIssueService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() cycleIssue: UpdateCycleIssueDto) {
        return this.cycleIssueService.updateById(+id, cycleIssue);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cycleIssueService.removeById(+id);
    }
}
