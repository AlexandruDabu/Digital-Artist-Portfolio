import { PortofolioEntity } from '../entities/portofolio.entity';
import { Repository } from 'typeorm';
import { CreatePortofolioDto, UpdatePortofolioDto } from '../DTOs/portofolio.dto';
export declare class PortofolioService {
    private readonly portofolioRepository;
    constructor(portofolioRepository: Repository<PortofolioEntity>);
    create(createPortofolioDto: CreatePortofolioDto): Promise<PortofolioEntity>;
    findAll(): Promise<PortofolioEntity[]>;
    findOne(id: number): Promise<PortofolioEntity>;
    update(id: number, updatePortofolioDto: UpdatePortofolioDto): Promise<PortofolioEntity>;
    remove(id: number): Promise<void>;
}
