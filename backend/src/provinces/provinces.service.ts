import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Province } from './provinces.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProvincesService {

    constructor(
        @InjectRepository(Province) private provinceRepo: Repository<Province>
    ){}

    findAll(): Promise<Province[]>{ //con relaciones
        return this.provinceRepo.find({
            relations: {
                autonomy: true
            }
        })
    }



    findById(id: string): Promise <Province | null>{
        return this.provinceRepo.findOne({
            where: {
                id: id
            }
        })
    }

    findAllByAutonomyId(autonomyId: string): Promise <Province[]>{
        return this.provinceRepo.find({
            relations: {
                autonomy: true
            },
            where: {
                autonomy: {
                    autonomyId: autonomyId
                }
            }
        })
    }

}
