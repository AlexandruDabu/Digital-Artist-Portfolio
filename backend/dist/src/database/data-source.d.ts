import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
export declare const createDataSourceOptions: (configService: ConfigService) => DataSourceOptions;
