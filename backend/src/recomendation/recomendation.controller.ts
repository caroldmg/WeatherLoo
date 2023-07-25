import { Controller, Get, Param } from '@nestjs/common';
import { Recommendation } from './recomendation.model';
import { RecomendationService } from './recomendation.service';

@Controller('recommendation')
export class RecomendationController {

    constructor(private recommendationService: RecomendationService){}

    @Get()
    findAll(): Promise<Recommendation[]>{
        return this.recommendationService.findAll()
    }

    @Get('id/:id')
    findById(@Param("id") id: number): Promise<Recommendation>{
        return this.recommendationService.findById(id)
    }

    @Get('type/:type')
    findByType(@Param("type") type: string): Promise<Recommendation[]>{
        return this.recommendationService.findByType(type);
    }

    @Get('weather/:weather')
    findByWeather(@Param("weather") weather: string): Promise<Recommendation[]>{
        return this.recommendationService.findByWeather(weather)
    }
}
