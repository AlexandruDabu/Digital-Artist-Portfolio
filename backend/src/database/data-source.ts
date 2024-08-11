import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { PortofolioEntity } from 'src/portofolio/entities/portofolio.entity';
import { NewsEntity } from 'src/news/entities/news.entity';

export const createDataSourceOptions = (configService: ConfigService): DataSourceOptions => {
  return {
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_DATABASE'),
    entities: [PortofolioEntity, NewsEntity],
    synchronize: false,
    migrations: ['dist/database/migrations/*.js'],
  };
};
