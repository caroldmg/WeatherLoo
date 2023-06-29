import { Autonomy } from "src/autonomy/autonomy.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Province{

    @PrimaryColumn({unique: true})
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Autonomy)
    @JoinColumn()
    autonomyId: number;

    @Column()
    capital: string;
    
}