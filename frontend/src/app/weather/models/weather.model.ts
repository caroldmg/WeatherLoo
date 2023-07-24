import { ITown } from "src/app/location/models/town.model"

export interface IWeather {
    municipio: ITown;
    fecha: Date;
    stateSky: StateSky;
    temperatura_actual: number;
    temperaturas: Temperaturas;
    humedad: number;
    viento: number;
    precipitacion: number;
    lluvia: number;
    pronostico: Pronostico
    proximos_dias: ProximosDia[]
  }
  
  export interface StateSky {
    description: string
    id: string
  }
  
  export interface Temperaturas {
    max: number;
    min: number
  }
  
  export interface Pronostico {
    hoy: Hoy
    manana: Manana
  }
  
  export interface Hoy {
    "@attributes": Attributes
    estado_cielo: number[]
    precipitacion: number[]
    prob_precipitacion: number[]
    prob_tormenta: number[]
    nieve: number[]
    prob_nieve: number[]
    temperatura: number[]
    sens_termica: number[]
    humedad_relativa: number[]
    viento: Viento[]
  }
  
  export interface Attributes {
    fecha: Date
    orto: string
    ocaso: string
  }
  
  export interface Viento {
    "@attributes": Attributes2;
    direccion: string;
    velocidad: number;
  }
  
  export interface Attributes2 {
    periodo: number;
  }
  
  export interface Manana {
    "@attributes": Attributes
    estado_cielo: number[]
    precipitacion: number[]
    prob_precipitacion: number[]
    prob_tormenta: number[]
    nieve: number[]
    prob_nieve: number[]
    temperatura: number[]
    sens_termica: number[]
    humedad_relativa: number[]
    viento: Viento[]
  } 
  
  export interface ProximosDia {
    "@attributes": Attributes3
    prob_precipitacion: number[];
    estado_cielo: string[]
    viento: Viento[];
    temperatura: Temperatura
    sens_termica: SensTermica
    humedad_relativa: HumedadRelativa
    uv_max?: number;
    estado_cielo_descripcion: string[]
  }
  
  export interface Attributes3 {
    fecha: Date
  }
  
  export interface Temperatura {
    maxima: number
    minima: number
  }
  
  export interface SensTermica {
    maxima: number;
    minima: number;
  }
  
  export interface HumedadRelativa {
    maxima: number
    minima: number
  }
  
  