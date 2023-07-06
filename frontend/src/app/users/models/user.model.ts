import { ITown } from "src/app/location/models/town.model";

export interface IUser {
    id: number;
    fullName: string;
    birthday: Date;
    email: string;
    gender: string;
    location: ITown| undefined;
    password: string;
    profilePic: string,
    pets: boolean,
    privateTransport: boolean,
    publicTransport: boolean,
    lugaresFav: ITown[]
}

//duda ----- ¿aquíñ debemos poner un atributo lugaresfavoritos? 
