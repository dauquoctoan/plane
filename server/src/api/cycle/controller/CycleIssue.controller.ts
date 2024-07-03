import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CycleIssueService } from '../service/CycleIssue.service';
import {
  CreateCycleIssueDto,
  UpdateCycleIssueDto,
} from '../dto/CycleIssue.dto';
import { ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('cycle-issue')
@ApiTags('Cycle Issue')
export class CycleIssueController {
  constructor(private readonly cycleIssueService: CycleIssueService) {}
  @Post()
  create(@Body() cycleIssue: CreateCycleIssueDto) {
    return handleResultSuccess(this.cycleIssueService.create(cycleIssue));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.cycleIssueService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.cycleIssueService.findOneById(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() cycleIssue: UpdateCycleIssueDto) {
    return handleResultSuccess(
      this.cycleIssueService.updateById(id, cycleIssue),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.cycleIssueService.removeById(id));
  }
}
