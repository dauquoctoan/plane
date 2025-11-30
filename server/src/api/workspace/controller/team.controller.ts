import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  Param,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTeamDto, UpdateTeamDto } from '../dto/Team.dto';
import { TeamService } from '../service/team.service';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('team')
@ApiTags('Team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}
  @Post()
  @ApiOperation({ summary: 'Tạo team', operationId: 'createTeam' })
  create(@Body() team: CreateTeamDto) {
    return handleResultSuccess(this.teamService.create(team));
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách team', operationId: 'getAllTeam' })
  findAll() {
    return handleResultSuccess(this.teamService.findAll());
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy danh sách team', operationId: 'getTeamById' })
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.teamService.findOneById(id));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Sửa danh sách team', operationId: 'updateTeam' })
  update(@Param('id') id: string, @Body() team: UpdateTeamDto) {
    return handleResultSuccess(this.teamService.updateById(id, team));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa danh sách team', operationId: 'deleteTeam' })
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.teamService.removeById(id));
  }
}
