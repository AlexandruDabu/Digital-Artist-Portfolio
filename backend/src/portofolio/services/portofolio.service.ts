import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PortofolioEntity } from '../entities/portofolio.entity';
import { Repository } from 'typeorm';
import { CreatePortofolioDto, UpdatePortofolioDto } from '../DTOs/portofolio.dto';

@Injectable()
export class PortofolioService {
    constructor(
        @InjectRepository(PortofolioEntity)
        private readonly portofolioRepository: Repository<PortofolioEntity>,
    ){}

    async create(createPortofolioDto: CreatePortofolioDto): Promise<PortofolioEntity>{
        const portofolio = this.portofolioRepository.create(createPortofolioDto);
        return await this.portofolioRepository.save(portofolio)
    }

    async findAll(): Promise<PortofolioEntity[]>{
        return await this.portofolioRepository.find();
    }

    async findOne(id: number): Promise<PortofolioEntity>{
        return await this.portofolioRepository.findOne({where: {id}})
    }

    async update(id: number, updatePortofolioDto: UpdatePortofolioDto): Promise<PortofolioEntity>{
        await this.portofolioRepository.update(id, updatePortofolioDto);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void>{
        await this.portofolioRepository.delete(id);
    }
}
