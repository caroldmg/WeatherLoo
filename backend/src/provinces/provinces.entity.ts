import { Autonomy } from "src/autonomy/autonomy.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Province{

    @PrimaryColumn({unique: true})
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Autonomy)
    @JoinColumn({name: 'autonomy_id'})
    autonomy: number;

    @Column()
    capital: string;
    
}