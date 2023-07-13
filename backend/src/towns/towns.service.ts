import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Town } from './towns.entity';

@Injectable()
export class TownsService {
    constructor(
        @InjectRepository(Town) private townRepo: Repository<Town>
    ){}

    findAll(): Promise<Town[]>{ //con relaciones
        return this.townRepo.find({
            relations: {
                province: true
            }
        })
    }



    findById(townCode: string): Promise <Town | null>{
        return this.townRepo.findOne({
            where: {
                townCode: townCode
            }
        })
    }

    findAllByProvinceId(provinceId: string): Promise<Town[]>{
        return this.townRepo.find({
            relations: {
                province: true
            },
            where: {
                province: {
                    id: provinceId
                }
            }
        })
    }
}
