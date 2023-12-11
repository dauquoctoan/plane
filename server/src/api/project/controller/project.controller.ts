import { Controller, Get, Post, Body, Param, Patch, Delete, Request as RequestNestjs, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ProjectService } from '../service/Project.service';
import { CreateProjectDto, UpdateProjectDto } from '../dto/Project.dto';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';
import { User } from 'src/api/user/entitys/User.entity';
import { Sequelize } from 'sequelize';


@Controller('project')
@ApiTags('Project')
@ApiBearerAuth('access-token')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }
    @Post()
    async create(@Body() project: CreateProjectDto) {
        return handleResultSuccess(await this.projectService.create({ ...project, network: +project.network || '' }));
    }

    @UseGuards(AuthGuard)
    @Get('test')
    async findAllProject(@RequestNestjs() request: IAuthRequest) {
        return handleResultSuccess(await this.projectService.findAll({ where: { workspace_id: 1 }, attributes: {
            include: [
              [
                Sequelize.literal(
                  `(SELECT 1 FROM projectmembers WHERE
                    projectmembers.id = Project.id AND
                      projectmembers.member = '${request.user.id}' 
                    )
                  `
                ),
                'is_member',
              ],
            ],
          },include: [{ model: User, as: 'created_by_user' }] }));
    }

    @UseGuards(AuthGuard)
    @Get('by-id:id')
    async findOneProject(@Param('id') id: string) {
        return handleResultSuccess(await this.projectService.findOneById(+id));
    }

    @UseGuards(AuthGuard)
    @Get('by-user/:id')
    async findWorkSpaceByUserId(@RequestNestjs() request: IAuthRequest) {
        return handleResultSuccess(await this.projectService.getProjectByUserId(request.user.id));
    }

    @Patch(':id')
    updateProject(@Param('id') id: string, @Body() project: UpdateProjectDto) {
        return handleResultSuccess(this.projectService.updateById(+id, project));
    }

    @Delete(':id')
    removeProject(@Param("id") id?: string) {
        return handleResultSuccess(this.projectService.removeById(+id));
    }
}
