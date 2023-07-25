import { TypeofExpr } from "@angular/compiler";

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
export interface Recommendation {
    id: number;
    type: Type;
    description: string;
    weather: Weather
}
