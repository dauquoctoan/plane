import { SequelizeModuleAsyncOptions } from "@nestjs/sequelize";
import { ConfigService } from '@nestjs/config';
import { Dialect, Sequelize } from "sequelize";
import { OnApplicationShutdown } from '@nestjs/common';

export const CONFIG_DB: SequelizeModuleAsyncOptions = {
    useFactory:async(configService: ConfigService) => ({
        dialect: configService.get<Dialect>('DATABASE') || 'mysql',
        host: 'localhost',
        port: configService.get<number>('DB_PORT') || 3006,
        username: configService.get<string>('DB_USER_NAME') || 'root',
        password: configService.get<string>('DB_PASSWORD') || '123456',
        database: configService.get<string>('DB_NAME') || 'plane',
        timezone: "+08:00",
        autoLoadModels: true,
        synchronize: true,//true : production
        logging: console.log,
        cache: {
          max: 500,       // Số lượng model được lưu trữ trong bộ nhớ
          maxAge: 60000,  // Thời gian sống của cache (milliseconds)
        },
        sync: { force: true }//true : create new model
    }),
    inject: [ConfigService]
}
