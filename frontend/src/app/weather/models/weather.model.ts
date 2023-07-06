export interface IWeather {
    municipio: {
        NOMBRE_PROVINCIA: string;
        NOMBRE: string;

    }
    stateSky: {
        description: string;
        id: number;
    }
    temperatura_actual: number;
    temperaturas: {
        max: number;
        min: number;
    }
    humedad: number;
    viento: number;
    precipitacion: number;
    lluvia: number;
    pronostico: {
        hoy:{
            estado_cielo: number[];
            precipitacion: number[];
            prob_tormenta: number[];
            nieve: number[];
            prob_nieve: number[];
            temperatura: number[];
            sens_terminca: number[];// tener en cuenta para las recomendaciones
            humedad_relativa: number[];
            //viento
        }
        manana: {
            estado_cielo: number[];
            precipitacion: number[];
            prob_tormenta: number[];
            nieve: number[];
            prob_nieve: number[];
            temperatura: number[];
            sens_terminca: number[];// tener en cuenta para las recomendaciones
            humedad_relativa: number[];
            //viento

        } 
    }
   // proximos_dias:{

   // } Mas adelante, preguntar a Alan 
   
}
