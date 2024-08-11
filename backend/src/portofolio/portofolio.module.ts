import { Module } from '@nestjs/common';
import { PortofolioService } from './services/portofolio.service';
import { PortofolioController } from './controllers/portofolio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortofolioEntity } from './entities/portofolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PortofolioEntity])],
  providers: [PortofolioService],
  exports: [PortofolioService],
  controllers: [PortofolioController]
})
export class PortofolioModule {}
