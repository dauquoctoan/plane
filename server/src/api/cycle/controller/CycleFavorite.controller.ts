import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CycleFavoriteService } from '../service/CycleFavorite.service';
import { CreateCycleFavoriteDto, UpdateCycleFavoriteDto } from '../dto/CycleFavorite.dto';
import { ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('cycle-favorite')
@ApiTags('Cycle Favorite')
export class CycleFavoriteController {
    constructor(private readonly cycleFavoriteService: CycleFavoriteService) { }
    @Post()
    async create(@Body() cycleFavorite: CreateCycleFavoriteDto) {
        return handleResultSuccess(await this.cycleFavoriteService.create(cycleFavorite));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.cycleFavoriteService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.cycleFavoriteService.findOneById(id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() cycleFavorite: UpdateCycleFavoriteDto) {
        return handleResultSuccess(this.cycleFavoriteService.updateById(id, cycleFavorite));
    }

    @Delete()
    remove(@Query('cycleId') cycleId: string, @Query('userId') userId: string) {
        return handleResultSuccess(this.cycleFavoriteService.remove({where: {
            user_id: userId,
            cycle_id: cycleId
        }}));
    }
}
