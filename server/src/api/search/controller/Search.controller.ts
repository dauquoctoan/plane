import { Controller, Request, UseGuards, Get, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';
import { IssueService } from 'src/api/issue/service/issue.service';
import { IAuthRequest } from 'src/types/auth.types';
import { AuthGuard } from 'src/Guards/auth.guard';
import { WorkspaceService } from 'src/api/workspace/service/workspace.service';
import { ProjectService } from 'src/api/project/service/project.service';
import { Op, Sequelize, where } from 'sequelize';
import { User } from 'src/api/user/entitys/User.entity';
import { WorkspaceMember } from 'src/api/workspace/entitys/WorkspaceMember.entity';
import { UserService } from 'src/api/user/service/user.service';

@Controller('search')
@ApiBearerAuth('access-token')
@ApiTags('Search')
export class SearchController {
    constructor(
        private readonly issueService: IssueService,
        private readonly workspaceService: WorkspaceService,
        private readonly projectService: ProjectService,
        private readonly userService: UserService,

    ) { }

    @Get()
    @UseGuards(AuthGuard)
    async findOverView(@Request() request: IAuthRequest, @Query('search') search: string) {
        const info = await this.userService.getUser(request.user.id)
        const template = `%${search}%`
        
        const issues = this.issueService.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: template } },
                    { description: { [Op.like]: template } }
                ],
                workspace_id: info.last_workspace_id,
            }
        })

        const workspaces = this.workspaceService.findAll({
            where: {
                name: {
                    [Op.like]: template
                },
            },
            include: [
                {
                    model: WorkspaceMember,
                    attributes:[],
                    include:[{
                        model: User,
                        attributes:[],
                        where:{
                            id: request.user.id
                        },
                    }]
                }
            ]
        })

        const projects = this.projectService.findAll({
            where: {
                [Op.or]: [
                    { name: { [Op.like]: template } },
                    { description: { [Op.like]: template } }
                ],
                workspace_id: info.last_workspace_id
            }
        })

        return handleResultSuccess({
            issues: await issues,
            workspaces: await workspaces,
            projects: await projects,
        });
    }
}
