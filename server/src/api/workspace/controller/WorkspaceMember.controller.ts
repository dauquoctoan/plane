import { Controller, Get, Post, Body, Patch, Delete, Query, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateWorkspaceMemberDto, UpdateWorkspaceMemberDto } from '../dto/WorkspaceMember.dto';
import { WorkspaceMemberService } from '../service/WorkspaceMember.service';


@Controller('workspaceMember')
@ApiTags('Workspace Member')
export class WorkspaceMemberController {
    constructor(private readonly workspaceMemberService: WorkspaceMemberService) { }
    @Post()
    createWorkspaceMember(@Body() createWorkspaceMemberDto: CreateWorkspaceMemberDto) {
        return this.workspaceMemberService.create(createWorkspaceMemberDto);
    }

    @Get()
    findAllWorkspaceMember() {
        return this.workspaceMemberService.findAll();
    }

    @Get(":id")
    findOneWorkspaceMember(@Param('id') id: string) {
        return this.workspaceMemberService.findOneById(+id);
    }

    @Patch(":id")
    updateWorkspaceMember(@Param('id') id: string, @Body() updateWorkspaceMemberDto: UpdateWorkspaceMemberDto) {
        return this.workspaceMemberService.updateById(+id, updateWorkspaceMemberDto);
    }

    @Delete(":id")
    removeWorkspaceMember(@Param('id') id: string) {
        return this.workspaceMemberService.removeById(+id);
    }
}
