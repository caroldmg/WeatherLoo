import { ITown } from "src/app/location/models/town.model";

export enum Gender{
    FEM= 'fem',
    MASC= 'masc',
    NB= 'nb',
    UNDETERMINATED= 'underterminated'

}
export interface IUser {
    id: number;
    fullName: string;
    email: string;
    password?: string;
    birthday?: Date;
    gender?: string;
    // location?: ITown| undefined;
    avatarImage?: string,
    pets?: boolean,
    privateTransport?: boolean,
    publicTransport?: boolean,
    favTowns?: ITown[]
}

//duda ----- ¿aquíñ debemos poner un atributo lugaresfavoritos? 
