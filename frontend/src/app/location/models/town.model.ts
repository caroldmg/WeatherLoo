import { IProvince } from "./province.model";

export interface ITown {
    townId: string| undefined;
    townCode: string;
    province: IProvince;
    name: string;
    capitalName: string;
    surface: number;
    townPopulation: number;
    altitude: number;
    perimeter: number;
    
}