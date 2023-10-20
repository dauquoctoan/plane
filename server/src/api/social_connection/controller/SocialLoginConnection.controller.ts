import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SocialLoginConnection } from '../entitys/SocialLoginConnection.entity';
import { CreateSocialLoginConnectionDto, UpdateSocialLoginConnectionDto } from '../dto/SocialLoginConnection.dto';
import { SocialLoginConnectionService } from '../service/SocialConnection.service';

@Controller('social-login-connection')
@ApiTags('Social Login Connection')
export class SocialLoginConnectionController {
    constructor(private readonly socialLoginConnectionService: SocialLoginConnectionService) { }
    @Post()
    create(@Body() globalView: CreateSocialLoginConnectionDto) {
        return this.socialLoginConnectionService.create(globalView);
    }

    @Get()
    findAll() {
        return this.socialLoginConnectionService.findAll();
    }

    @Get(':id')
    findOne(@Query('id') id: string) {
        return this.socialLoginConnectionService.findOneById(+id);
    }

    @Patch(':id')
    update(@Query('id') id: string, @Body() globalView: UpdateSocialLoginConnectionDto) {
        return this.socialLoginConnectionService.updateById(+id, globalView);
    }

    @Delete(':id')
    remove(@Query("id") id?: string) {
        return this.socialLoginConnectionService.removeById(+id);
    }
}
