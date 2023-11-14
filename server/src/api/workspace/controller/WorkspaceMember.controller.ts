import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateWorkspaceMemberDto, UpdateWorkspaceMemberDto } from '../dto/WorkspaceMember.dto';
import { WorkspaceMemberService } from '../service/WorkspaceMember.service';
import { handleResultSuccess } from 'src/helper/handleresult';


@Controller('workspaceMember')
@ApiTags('Workspace Member')
export class WorkspaceMemberController {
    constructor(private readonly workspaceMemberService: WorkspaceMemberService) { }
    @Post()
    createWorkspaceMember(@Body() createWorkspaceMemberDto: CreateWorkspaceMemberDto) {
        return handleResultSuccess(this.workspaceMemberService.create(createWorkspaceMemberDto));
    }

    @Get()
    findAllWorkspaceMember() {
        return handleResultSuccess(this.workspaceMemberService.findAll());
    }

    @Get(":id")
    findOneWorkspaceMember(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceMemberService.findOneById(+id));
    }

    @Patch(":id")
    updateWorkspaceMember(@Param('id') id: string, @Body() updateWorkspaceMemberDto: UpdateWorkspaceMemberDto) {
        return handleResultSuccess(this.workspaceMemberService.updateById(+id, updateWorkspaceMemberDto));
    }

    @Delete(":id")
    removeWorkspaceMember(@Param('id') id: string) {
        return handleResultSuccess(this.workspaceMemberService.removeById(+id));
    }
}
