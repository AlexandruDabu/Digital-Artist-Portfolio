"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddedNewsUser1723234242669 = void 0;
class AddedNewsUser1723234242669 {
    constructor() {
        this.name = 'AddedNewsUser1723234242669';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "news"`);
    }
}
exports.AddedNewsUser1723234242669 = AddedNewsUser1723234242669;
//# sourceMappingURL=1723234242669-AddedNewsUser.js.map