import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateWorkspaceMemberDto, CreateWorkspaceMemberDtoWidthToken, UpdateWorkspaceMemberDto } from '../dto/WorkspaceMember.dto';
import { WorkspaceMemberService } from '../service/WorkspaceMember.service';
import { handleResultSuccess } from 'src/helper/handleresult';


@Controller('workspace-member')
@ApiTags('Workspace Member')
export class WorkspaceMemberController {
    constructor(private readonly workspaceMemberService: WorkspaceMemberService) { }
    @Post()
    async createWorkspaceMember(@Body() createWorkspaceMemberDto: CreateWorkspaceMemberDtoWidthToken) {
        const {token, workspace_id} = createWorkspaceMemberDto;
        return handleResultSuccess(await this.workspaceMemberService.createWorkspaceMemberWhenJoin(workspace_id, token));
    }

    @Get()
    async findAllWorkspaceMember() {
        return handleResultSuccess(await this.workspaceMemberService.findAll());
    }

    @Get(":id")
    findOneWorkspaceMember(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceMemberService.findOneById(id));
    }

    @Patch(":id")
    updateWorkspaceMember(@Param('id') id: string, @Body() updateWorkspaceMemberDto: UpdateWorkspaceMemberDto) {
        return handleResultSuccess(this.workspaceMemberService.updateById(id, updateWorkspaceMemberDto));
    }

    @Delete(":id")
    removeWorkspaceMember(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceMemberService.removeById(id));
    }
}
