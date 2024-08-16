"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataSourceOptions = void 0;
const portofolio_entity_1 = require("../portofolio/entities/portofolio.entity");
const news_entity_1 = require("../news/entities/news.entity");
const createDataSourceOptions = (configService) => {
    return {
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [portofolio_entity_1.PortofolioEntity, news_entity_1.NewsEntity],
        synchronize: false,
        migrations: ['dist/database/migrations/*.js'],
        ssl: {
            rejectUnauthorized: false,
        },
    };
};
exports.createDataSourceOptions = createDataSourceOptions;
//# sourceMappingURL=data-source.js.map