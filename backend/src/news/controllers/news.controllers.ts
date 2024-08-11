import { BadRequestException, Body, Controller, Get, InternalServerErrorException, NotFoundException, Post } from "@nestjs/common";
import { NewsServices } from "../services/news.service";
import { CreateNewsUserDto } from "../DTOs/news.dto";

@Controller('news')
export class NewsController{
    constructor(private readonly newsServices:NewsServices){}

    @Get()
    async find(){
        try{
            const users = await this.newsServices.findAll();
            return users;
        }catch(error){
            if(error instanceof NotFoundException){
                throw error;
            }
            throw new InternalServerErrorException('Failed to retrieve the users');
        }
    }

    @Post()
    async create(@Body() createNewsUserDto:CreateNewsUserDto){
        try{
            return await this.newsServices.create(createNewsUserDto);
        }catch(error){
            if(error.code == '235305'){
                throw new BadRequestException('A user with this email already exists');
            }
            throw new InternalServerErrorException('Failed to subscribe the user');
        }
    }
}