import { Controller, Get, Param } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { Province } from './provinces.entity';

@Controller('provinces')
export class ProvincesController {

    constructor(private provinceService: ProvincesService){}

    @Get()
    findAll(): Promise <Province[]>{
        return this.provinceService.findAll()
    }

    @Get('autonomy/:autonomyId')
    findAllByAutonomyId(
        @Param("autonomyId") autonomyId: string): Promise <Province[]>{
            return this.provinceService.findAllByAutonomyId(autonomyId)
    }

    @Get('id/:id')
    findById(@Param('id') id: string): Promise <Province>{
        return this.provinceService.findById(id)
    }

}
