import { PortofolioService } from '../services/portofolio.service';
import { CreatePortofolioDto, UpdatePortofolioDto } from '../DTOs/portofolio.dto';
export declare class PortofolioController {
    private readonly portofolioService;
    constructor(portofolioService: PortofolioService);
    findAll(): Promise<import("../entities/portofolio.entity").PortofolioEntity[]>;
    findOne(id: string): Promise<import("../entities/portofolio.entity").PortofolioEntity>;
    create(createPortofolioDto: CreatePortofolioDto): Promise<import("../entities/portofolio.entity").PortofolioEntity>;
    update(id: string, updatePortofolioDto: UpdatePortofolioDto): Promise<import("../entities/portofolio.entity").PortofolioEntity>;
    remove(id: string): Promise<void>;
}
