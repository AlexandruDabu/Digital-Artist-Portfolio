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
    imageUrl: string;

    @Column({nullable: true})
    clientLink: string;

    @Column({default: true})
    isVisible: boolean;
}