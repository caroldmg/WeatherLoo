import { Province } from "src/provinces/provinces.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Town{

    @PrimaryGeneratedColumn()
    townId: number;

    @Column()
    townCode: string;

    @Column()
    CODIGOINE: number;

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