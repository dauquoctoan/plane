import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { WorkspaceMemberInviteService } from '../service/WorkspaceMemberInvite.service';
import { CreateWorkspaceMemberInviteDto, UpdateWorkspaceMemberInviteDto } from '../dto/WorkspaceMemberInvite.dto';


@Controller('workspaceMemberInvite')
@ApiTags('WorkspaceMemberInvite')
export class WorkspaceMemberInviteController {
    constructor(private readonly workspaceMemberInviteService: WorkspaceMemberInviteService) { }
    @Post()
    createWorkspaceMemberInvite(@Body() createWorkspaceMemberInviteDto: CreateWorkspaceMemberInviteDto) {
        return this.workspaceMemberInviteService.create(createWorkspaceMemberInviteDto);
    }

    @Get()
    findAllWorkspaceMemberInvite() {
        return this.workspaceMemberInviteService.findAll();
    }

    @Get(":id")
    findOneWorkspaceMemberInvite(@Param('id') id: string) {
        return this.workspaceMemberInviteService.findOne(+id);
    }

    @Patch(":id")
    updateWorkspaceMemberInvite(@Param('id') id: string, @Body() updateWorkspaceMemberInviteDto: UpdateWorkspaceMemberInviteDto) {
        return this.workspaceMemberInviteService.updateById(+id, updateWorkspaceMemberInviteDto);
    }

    @Delete(":id")
    removeWorkspaceMemberInvite(@Param('id') id: string) {
        return this.workspaceMemberInviteService.removeById(+id);
    }
}
