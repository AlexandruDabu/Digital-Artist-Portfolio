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
exports.PortofolioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const portofolio_entity_1 = require("../entities/portofolio.entity");
const typeorm_2 = require("typeorm");
let PortofolioService = class PortofolioService {
    constructor(portofolioRepository) {
        this.portofolioRepository = portofolioRepository;
    }
    async create(createPortofolioDto) {
        const portofolio = this.portofolioRepository.create(createPortofolioDto);
        return await this.portofolioRepository.save(portofolio);
    }
    async findAll() {
        return await this.portofolioRepository.find();
    }
    async findOne(id) {
        return await this.portofolioRepository.findOne({ where: { id } });
    }
    async update(id, updatePortofolioDto) {
        await this.portofolioRepository.update(id, updatePortofolioDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.portofolioRepository.delete(id);
    }
};
exports.PortofolioService = PortofolioService;
exports.PortofolioService = PortofolioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(portofolio_entity_1.PortofolioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PortofolioService);
//# sourceMappingURL=portofolio.service.js.map