"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortofolioModule = void 0;
const common_1 = require("@nestjs/common");
const portofolio_service_1 = require("./services/portofolio.service");
const portofolio_controller_1 = require("./controllers/portofolio.controller");
const typeorm_1 = require("@nestjs/typeorm");
const portofolio_entity_1 = require("./entities/portofolio.entity");
let PortofolioModule = class PortofolioModule {
};
exports.PortofolioModule = PortofolioModule;
exports.PortofolioModule = PortofolioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([portofolio_entity_1.PortofolioEntity])],
        providers: [portofolio_service_1.PortofolioService],
        exports: [portofolio_service_1.PortofolioService],
        controllers: [portofolio_controller_1.PortofolioController]
    })
], PortofolioModule);
//# sourceMappingURL=portofolio.module.js.map