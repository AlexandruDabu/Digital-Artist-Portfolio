import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1723210122723 implements MigrationInterface {
    name = 'InitialSchema1723210122723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "portofolio" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "description" text NOT NULL, "imageUrl" character varying, "clientLink" character varying, "isVisible" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_af0ea2226011de449a194a0eb75" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "portofolio"`);
    }

}
