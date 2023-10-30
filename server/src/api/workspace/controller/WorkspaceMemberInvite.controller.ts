import { Controller, Get, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { WorkspaceMemberInviteService } from '../service/WorkspaceMemberInvite.service';
import { CreateWorkspaceMemberInviteDto, CreatesWorkspaceMemberInviteDto, UpdateWorkspaceMemberInviteDto } from '../dto/WorkspaceMemberInvite.dto';
import { JwtService } from '@nestjs/jwt';


@Controller('workspaceMemberInvite')
@ApiTags('Workspace Member Invite')
export class WorkspaceMemberInviteController {
    constructor(private readonly workspaceMemberInviteService: WorkspaceMemberInviteService, private jwtService: JwtService) { }
    @Post()
    createWorkspaceMemberInvite(@Body() createWorkspaceMemberInviteDto: CreateWorkspaceMemberInviteDto) {
        return this.workspaceMemberInviteService.create(createWorkspaceMemberInviteDto);
    }

    @Post('creates')
    createsWorkspaceMemberInvite(@Body() createWorkspaceMemberInvite: CreatesWorkspaceMemberInviteDto) {
        const lsMember: CreateWorkspaceMemberInviteDto[] = Object.keys(createWorkspaceMemberInvite).map((key) => {
            const email = createWorkspaceMemberInvite[key].email;
            const role = createWorkspaceMemberInvite[key].role;

            return {
                ...createWorkspaceMemberInvite[key],
                token: this.jwtService.sign({
                    email,
                    role
                }, { expiresIn: process.env.TOKEN_TOKEN_EXPIRATION })
            };
        })
        return this.workspaceMemberInviteService.creates(lsMember);
    }

    @Get()
    findAllWorkspaceMemberInvite() {
        return this.workspaceMemberInviteService.findAll();
    }

    @Get(":id")
    findOneWorkspaceMemberInvite(@Param('id') id: string) {
        return this.workspaceMemberInviteService.findOneById(+id);
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
