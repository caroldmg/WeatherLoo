import { IAutonomy } from "./autonomy.model";

export interface IProvince {
    id: string;
    name: string;
    autonomy: IAutonomy;
    capital: string;
    // photo: string
}
