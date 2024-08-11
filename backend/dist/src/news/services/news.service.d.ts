import { NewsEntity } from "../entities/news.entity";
import { Repository } from "typeorm";
import { CreateNewsUserDto } from "../DTOs/news.dto";
export declare class NewsServices {
    private readonly newsRepository;
    constructor(newsRepository: Repository<NewsEntity>);
    findAll(): Promise<NewsEntity[]>;
    create(createNewsUserDto: CreateNewsUserDto): Promise<NewsEntity>;
}
