import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('news')
export class NewsEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    email: string;
}