import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Autonomy {

    @PrimaryColumn()
    autonomyId: number;

    @Column()
    name: string;
}