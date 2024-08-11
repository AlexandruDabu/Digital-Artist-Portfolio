import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, InternalServerErrorException, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { PortofolioService } from '../services/portofolio.service';
import { CreatePortofolioDto, UpdatePortofolioDto } from '../DTOs/portofolio.dto';
import { NotFoundError } from 'rxjs';

@Controller('works')
export class PortofolioController {
    constructor(private readonly portofolioService: PortofolioService) {}

    @Get()
    async findAll(){
        try{
            const works = await this.portofolioService.findAll();
            return works;
        }catch(error){
            throw new InternalServerErrorException('Failed to retrieve work');
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        try{
            const work = await this.portofolioService.findOne(+id);
            if(!work){
                throw new NotFoundException(`Work with ID ${id} not found`)
            }
            return work;
        }catch(error){
            if(error instanceof NotFoundException){
                throw error;
            }
            throw new InternalServerErrorException('Failed to retrieve the work')
        }
    }

    @Post()
    async create(@Body() createPortofolioDto:CreatePortofolioDto) {
        try{
            return await this.portofolioService.create(createPortofolioDto);
        }catch(error){
            if(error.code == '23505'){
                throw new BadRequestException('A work with those credentials already exists');
            }
            throw new InternalServerErrorException('Failed to create the work')
        }
    }

    @Put(':id')
    async update(@Param('id') id: string,@Body() updatePortofolioDto: UpdatePortofolioDto){
        try{
            const updatedWork = await this.portofolioService.update(+id, updatePortofolioDto);
            if(!updatedWork){
                throw new NotFoundException(`Work with ID ${id} not found`)
            }
            return updatedWork;
        }catch(error){
            if(error instanceof NotFoundException){
                throw error
            }
            throw new InternalServerErrorException('Failed to update the work')
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id:string){
        try{
            await this.portofolioService.remove(+id);

        }catch(error){
            if(error instanceof NotFoundException){
                throw error;
            }
            throw new InternalServerErrorException('Failed to delete the work');
        }
    }
}
