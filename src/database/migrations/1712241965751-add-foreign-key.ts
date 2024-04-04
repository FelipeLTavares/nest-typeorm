import { MigrationInterface, QueryRunner } from "typeorm";

export class AddForeignKey1712241965751 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE posts
            ADD CONSTRAINT FK_user
            FOREIGN KEY ("userId")
            REFERENCES users(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE posts
            DROP CONSTRAINT FK_user;
        `)
    }

}
