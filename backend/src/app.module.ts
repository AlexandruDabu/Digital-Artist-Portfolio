import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortofolioModule } from './portofolio/portofolio.module';
import { DatabaseModule } from './database/database.module';
import { NewsModule } from './news/news.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    NewsModule,
    DatabaseModule,
    PortofolioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
