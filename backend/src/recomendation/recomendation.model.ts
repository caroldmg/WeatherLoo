
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

export enum Type{
    USE = "uso",
    ACTION = "acción"

}
export enum Weather{

    SOL = "sol",
    LLUVIA = "lluvia",
    FRIO = "frio",
    CALOR = "calor"
}
@Entity()
export class Recommendation{

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: 'enum',
        enum: Type
    })
    type: string;

    @Column({type: "text"})
    description: string

    @Column({
        type: 'enum',
        enum: Weather
    })
    weather: string

    
}