import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1723396401311 implements MigrationInterface {
    name = 'InitialMigration1723396401311'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "news" ("id" SERIAL NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_39a43dfcb6007180f04aff2357e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "portofolio" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text NOT NULL, "imageUrl" character varying, "clientLink" character varying, "isVisible" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_af0ea2226011de449a194a0eb75" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "portofolio"`);
        await queryRunner.query(`DROP TABLE "news"`);
    }

}
