import { NewsServices } from "../services/news.service";
import { CreateNewsUserDto } from "../DTOs/news.dto";
export declare class NewsController {
    private readonly newsServices;
    constructor(newsServices: NewsServices);
    find(): Promise<import("../entities/news.entity").NewsEntity[]>;
    create(createNewsUserDto: CreateNewsUserDto): Promise<import("../entities/news.entity").NewsEntity>;
}
