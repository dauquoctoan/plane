import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFileAssetDto, UpdateFileAssetDto } from '../dto/FileAssetDto';
import { FileAssetService } from '../service/asset.service';
import { handleResultSuccess } from 'src/helper/handleresult';

@Controller()
@ApiTags('File Asset')
export class FileAssetController {
    constructor(private readonly fileAssetService: FileAssetService) { }
    @Post()
    create(@Body() fileAsset: CreateFileAssetDto) {
        return handleResultSuccess(this.fileAssetService.create(fileAsset));
    }

    @Get()
    findAll() {
        return handleResultSuccess(this.fileAssetService.findAll());
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return handleResultSuccess(this.fileAssetService.findOneById(+id));
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() fileAsset: UpdateFileAssetDto) {
        return handleResultSuccess(this.fileAssetService.updateById(+id, fileAsset));
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return handleResultSuccess(this.fileAssetService.removeById(+id));
    }
}
