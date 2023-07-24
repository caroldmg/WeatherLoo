import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Recommendation{

    @PrimaryColumn()
    id: number

    @Column()
    type: string;

    @Column()
    sol: string[];

    @Column()
    lluvia: string[];

    @Column()
    frío: string[];

    @Column()
    calor: string[]
}