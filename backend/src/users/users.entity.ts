import { Town } from "src/towns/towns.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

export enum Gender{
    FEM= 'fem',
    MASC= 'masc',
    NB= 'nb',
    UNDETERMINATED= 'underterminated'

}
@Entity()
export class User{


    @PrimaryGeneratedColumn()
    userId: number

    @Column()
    fullName: string;

    @Column()
    birthday: Date;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.UNDETERMINATED
    })
   gender: Gender;

   @Column()
    location: number;

    @Column()
    profilePic: string;

    @Column({type: 'boolean', default: false})
    pets: boolean;

    @Column({type: 'boolean', default: false})
    publicTransport: boolean;

    @Column({type: 'boolean', default: false})
    privateTransport: boolean;

    @ManyToMany(() => Town )
    @JoinTable({
        name: 'userFavTown',
        joinColumn: {name: 'id_user'},
        inverseJoinColumn: {name: 'id_town'}

    })
    favTowns: Town[]
    
}