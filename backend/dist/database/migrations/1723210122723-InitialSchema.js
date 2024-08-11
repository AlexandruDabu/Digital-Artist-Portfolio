"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1723210122723 = void 0;
class InitialSchema1723210122723 {
    constructor() {
        this.name = 'InitialSchema1723210122723';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "portofolio" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text NOT NULL, "imageUrl" character varying, "clientLink" character varying, "isVisible" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_af0ea2226011de449a194a0eb75" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "portofolio"`);
    }
}
exports.InitialSchema1723210122723 = InitialSchema1723210122723;
//# sourceMappingURL=1723210122723-InitialSchema.js.map