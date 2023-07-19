import { Controller, Get, Param } from '@nestjs/common';
import { TownsService } from './towns.service';
import { Town } from './towns.entity';

@Controller('towns')
export class TownsController {

    constructor(private townService: TownsService){}

    @Get()
    findAll(): Promise <Town[]>{
        return this.townService.findAll()
    }

    @Get('province/:provinceId')
    findAllByAutonomyId(
        @Param("provinceId") provinceId: string): Promise <Town[]>{
            return this.townService.findAllByProvinceId(provinceId)
    }

    @Get('townCode/:townCode')
    findById(@Param('townCode') townCode: string): Promise <Town>{
        return this.townService.findById(townCode)
    }

    @Get('popular')
    findAllByPopularTrue(): Promise <Town[]>{
        return this.townService.findAllByPopularTrue()
    }

}
