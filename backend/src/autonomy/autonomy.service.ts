import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autonomy } from './autonomy.entity';

@Injectable()
export class AutonomyService {

    constructor(
        @InjectRepository(Autonomy) private autonomyRepo: Repository<Autonomy>
    ){}

    findAll(): Promise<Autonomy[]>{ //con relaciones
        return this.autonomyRepo.find()
    }

    findById(autonomyId: string): Promise <Autonomy | null>{
        return this.autonomyRepo.findOne({
            where: {
                autonomyId: autonomyId
            }
        })
    }

}

