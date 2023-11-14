import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CycleFavoriteService } from '../service/CycleFavorite.entity';
import { CreateCycleFavoriteDto, UpdateCycleFavoriteDto } from '../dto/CycleFavorite.dto';
import { ApiTags } from '@nestjs/swagger';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('cycle-favorite')
@ApiTags('Cycle Favorite')
export class CycleFavoriteController {
    constructor(private readonly cycleFavoriteService: CycleFavoriteService) { }
    @Post()
    create(@Body() cycleFavorite: CreateCycleFavoriteDto) {
        return handleResultSuccess(this.cycleFavoriteService.create(cycleFavorite));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.cycleFavoriteService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.cycleFavoriteService.findOneById(+id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() cycleFavorite: UpdateCycleFavoriteDto) {
        return handleResultSuccess(this.cycleFavoriteService.updateById(+id, cycleFavorite));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.cycleFavoriteService.removeById(+id));
    }
}
