import { Controller, Get, Param } from '@nestjs/common';
import { AutonomyService } from './autonomy.service';
import { Autonomy } from './autonomy.entity';

@Controller('autonomy')
export class AutonomyController {

    constructor(private autonomyService: AutonomyService){}

    @Get()
    findAll(): Promise<Autonomy[]>{
        return this.autonomyService.findAll()
    }

    @Get('id/:autonomyId')
    findById( @Param ('autonomyId') autonomyId: string): Promise <Autonomy>{
        return this.autonomyService.findById(autonomyId)
    }
}
