import { SequelizeModuleAsyncOptions, SequelizeModuleOptions } from "@nestjs/sequelize";
import { State } from "src/api/state/entitys/state.entity";
import { ConfigService } from '@nestjs/config';
import { Dialect } from "sequelize";

export const CONFIG_DB: SequelizeModuleAsyncOptions = {
    useFactory: (configService: ConfigService) => ({
        dialect: configService.get<Dialect>('DATABASE')||'mysql',
        host: 'localhost',
        port: configService.get<number>('DB_PORT') || 3006,
        username: configService.get<string>('DB_USER_NAME') || 'root',
        password: configService.get<string>('DB_PASSWORD') || '123456',
        database: configService.get<string>('DB_NAME') || 'plane',
        timezone: "+08:00",
        autoLoadModels: true,
        synchronize: true,
        models: [State]
    }),
    inject: [ConfigService]
}