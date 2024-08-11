import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NewsEntity } from "../entities/news.entity";
import { Repository } from "typeorm";
import { CreateNewsUserDto } from "../DTOs/news.dto";

@Injectable()
export class NewsServices{
    constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>
    ){}

    async findAll():Promise<NewsEntity[]>{
        return await this.newsRepository.find();
    }

    async create(createNewsUserDto: CreateNewsUserDto): Promise<NewsEntity>{
        const allUsers = await this.findAll();
        const newsUser = this.newsRepository.create(createNewsUserDto)
        if(allUsers.some(user => user.email === newsUser.email)){
            throw new Error('Email already exists')
        }
        return await this.newsRepository.save(newsUser);
    }
}