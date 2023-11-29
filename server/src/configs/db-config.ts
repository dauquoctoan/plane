import { SequelizeModuleAsyncOptions } from "@nestjs/sequelize";
import { ConfigService } from '@nestjs/config';
import { Dialect, Sequelize } from "sequelize";
import { OnApplicationShutdown } from '@nestjs/common';

export const CONFIG_DB: SequelizeModuleAsyncOptions = {
    useFactory: (configService: ConfigService) => ({
        dialect: configService.get<Dialect>('DATABASE') || 'mysql',
        host: 'localhost',
        port: configService.get<number>('DB_PORT') || 3006,
        username: configService.get<string>('DB_USER_NAME') || 'root',
        password: configService.get<string>('DB_PASSWORD') || '123456',
        database: configService.get<string>('DB_NAME') || 'plane',
        //timezone: "+08:00",
        autoLoadModels: true,
        synchronize: true,
        logging: console.log,
        sync: { force: true }
    }),
    inject: [ConfigService]
}

export class DatabaseModule implements OnApplicationShutdown {
    constructor(private readonly sequelize: Sequelize) {}
  
    onApplicationShutdown(signal?: string): any {
      // Đóng connection pool khi ứng dụng kết thúc
      if (this.sequelize) {
        this.sequelize.close();
      }
    }
  }