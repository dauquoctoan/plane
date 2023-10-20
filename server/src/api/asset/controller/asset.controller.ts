import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFileAssetDto, UpdateFileAssetDto } from '../dto/FileAssetDto';
import { FileAssetService } from '../service/asset.service';

@Controller()
@ApiTags('File Asset')
export class FileAssetController {
    constructor(private readonly fileAssetService: FileAssetService) { }
    @Post()
    create(@Body() fileAsset: CreateFileAssetDto) {
        return this.fileAssetService.create(fileAsset);
    }

    @Get()
    findAll() {
        return this.fileAssetService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.fileAssetService.findOneById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() fileAsset: UpdateFileAssetDto) {
        return this.fileAssetService.updateById(+id, fileAsset);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.fileAssetService.removeById(+id);
    }
}
