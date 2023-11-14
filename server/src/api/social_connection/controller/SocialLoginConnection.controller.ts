import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSocialLoginConnectionDto, UpdateSocialLoginConnectionDto } from '../dto/SocialLoginConnection.dto';
import { SocialLoginConnectionService } from '../service/SocialConnection.service';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('social-login-connection')
@ApiTags('Social Login Connection')
export class SocialLoginConnectionController {
    constructor(private readonly socialLoginConnectionService: SocialLoginConnectionService) { }
    @Post()
    create(@Body() globalView: CreateSocialLoginConnectionDto) {
        return handleResultSuccess(this.socialLoginConnectionService.create(globalView));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.socialLoginConnectionService.findAll());
    }

    @Get(':id')
    findOne(@Query('id') id: string) {
        return handleResultSuccess(this.socialLoginConnectionService.findOneById(+id));
    }

    @Patch(':id')
    update(@Query('id') id: string, @Body() globalView: UpdateSocialLoginConnectionDto) {
        return handleResultSuccess(this.socialLoginConnectionService.updateById(+id, globalView));
    }

    @Delete(':id')
    remove(@Query("id") id?: string) {
        return handleResultSuccess(this.socialLoginConnectionService.removeById(+id));
    }
}
