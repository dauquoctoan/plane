import { Module } from '@nestjs/common';
import { FileAssetService } from './service/asset.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileAsset } from './entitys/FileAsset.entity';
import { FileAssetController } from './controller/asset.controller';

@Module({
  imports: [SequelizeModule.forFeature([FileAsset])],
  providers: [FileAssetService],
  controllers: [FileAssetController],
})
export class AssetModule {}
