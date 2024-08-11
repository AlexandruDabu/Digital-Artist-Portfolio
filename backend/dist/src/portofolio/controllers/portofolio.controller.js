"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortofolioController = void 0;
const common_1 = require("@nestjs/common");
const portofolio_service_1 = require("../services/portofolio.service");
const portofolio_dto_1 = require("../DTOs/portofolio.dto");
let PortofolioController = class PortofolioController {
    constructor(portofolioService) {
        this.portofolioService = portofolioService;
    }
    async findAll() {
        try {
            const works = await this.portofolioService.findAll();
            return works;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to retrieve work');
        }
    }
    async findOne(id) {
        try {
            const work = await this.portofolioService.findOne(+id);
            if (!work) {
                throw new common_1.NotFoundException(`Work with ID ${id} not found`);
            }
            return work;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to retrieve the work');
        }
    }
    async create(createPortofolioDto) {
        try {
            return await this.portofolioService.create(createPortofolioDto);
        }
        catch (error) {
            if (error.code == '23505') {
                throw new common_1.BadRequestException('A work with those credentials already exists');
            }
            throw new common_1.InternalServerErrorException('Failed to create the work');
        }
    }
    async update(id, updatePortofolioDto) {
        try {
            const updatedWork = await this.portofolioService.update(+id, updatePortofolioDto);
            if (!updatedWork) {
                throw new common_1.NotFoundException(`Work with ID ${id} not found`);
            }
            return updatedWork;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to update the work');
        }
    }
    async remove(id) {
        try {
            await this.portofolioService.remove(+id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to delete the work');
        }
    }
};
exports.PortofolioController = PortofolioController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PortofolioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PortofolioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [portofolio_dto_1.CreatePortofolioDto]),
    __metadata("design:returntype", Promise)
], PortofolioController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, portofolio_dto_1.UpdatePortofolioDto]),
    __metadata("design:returntype", Promise)
], PortofolioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PortofolioController.prototype, "remove", null);
exports.PortofolioController = PortofolioController = __decorate([
    (0, common_1.Controller)('works'),
    __metadata("design:paramtypes", [portofolio_service_1.PortofolioService])
], PortofolioController);
//# sourceMappingURL=portofolio.controller.js.map