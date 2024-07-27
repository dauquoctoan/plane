import { SequelizeModuleAsyncOptions } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { Dialect } from 'sequelize';

export const CONFIG_DB: SequelizeModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => ({
    dialect: configService.get<Dialect>('DATABASE') || 'mysql',
    host: configService.get<string>('DB_HOST') || 'localhost',
    port: configService.get<number>('DB_PORT') || 3006,
    username: configService.get<string>('DB_USER_NAME') || 'root',
    password: configService.get<string>('DB_PASSWORD') || '123456',
    database: configService.get<string>('DB_NAME') || 'plane',
    timezone: '+00:00',
    autoLoadModels: true,
    synchronize: false, //false product
    logging: console.log,
    cache: {
      max: 500,
      maxAge: 60000,
    },
    sync: { force: true },
  }),
  inject: [ConfigService],
};
