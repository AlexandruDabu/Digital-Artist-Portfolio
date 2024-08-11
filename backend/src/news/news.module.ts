import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsServices } from './services/news.service';
import { NewsController } from './controllers/news.controllers';
import { NewsEntity } from './entities/news.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NewsEntity])],
  providers: [NewsServices],
  exports: [NewsServices],
  controllers: [NewsController]
})
export class NewsModule {}
