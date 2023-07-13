import { Province } from "src/provinces/provinces.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Town{

    @PrimaryColumn()
    townCode: string;

    @Column()
    CODIGOINE: string;

    @ManyToOne(()=> Province)
    @JoinColumn({name: 'id_province'})
    CODPROV: number;

    @Column()
    NOMBRE: string;

    @Column()
    NOMBRE_CAPITAL: string;

    @Column()
    SUPERFICIE: number;

    @Column()
    POBLACION_MUNI: number;

    @Column()
    ALTITUD: number;

    @Column()
    PERIMETRO: number
}