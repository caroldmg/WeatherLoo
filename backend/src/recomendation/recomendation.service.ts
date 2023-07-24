import { Injectable } from '@nestjs/common';
import { Recommendation } from './recomendation.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecomendationService {

    constructor(
        @InjectRepository(Recommendation) private recommendationRepo: Repository<Recommendation>
    ){}

    findAll(): Promise <Recommendation[]>{
        return this.recommendationRepo.find()
    }

    findById(id: number): Promise<Recommendation>{
        return this.recommendationRepo.findOne({
            where: {
                id: id
            }
        })
    }
    findByType(type: string): Promise<Recommendation>{
        return this.recommendationRepo.findOne({
            where: {
                type: type
            }
        })
    }
}
