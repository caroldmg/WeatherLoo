import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Autonomy {

    @PrimaryColumn()
    autonomyId: string;

    @Column()
    name: string;
}