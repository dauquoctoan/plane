import { ApiTags } from '@nestjs/swagger';
import { ModuleFavoriteService } from '../service/ModuleFavorite.service';
import {
  CreateModuleFavoriteDto,
  UpdateModuleFavoriteDto,
} from '../dto/ModuleFavorite.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller('module-favorite')
@ApiTags('Module Favorite')
export class ModuleFavoriteController {
  constructor(private readonly moduleFavoriteService: ModuleFavoriteService) {}
  @Post()
  create(@Body() module: CreateModuleFavoriteDto) {
    return handleResultSuccess(this.moduleFavoriteService.create(module));
  }

  @Get()
  findAll() {
    return handleResultSuccess(this.moduleFavoriteService.findAll());
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return handleResultSuccess(this.moduleFavoriteService.findOneById(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() module: UpdateModuleFavoriteDto) {
    return handleResultSuccess(
      this.moduleFavoriteService.updateById(id, module),
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return handleResultSuccess(this.moduleFavoriteService.removeById(id));
  }
}
