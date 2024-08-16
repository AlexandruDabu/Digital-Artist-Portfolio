import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('portofolio')
export class PortofolioEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 255})
    title: string;

    @Column('text')
    description: string;

    @Column({nullable: true})
    imageurl: string;

    @Column({nullable: true})
    clientlink: string;

    @Column({default: true})
    isvisible: boolean;
}