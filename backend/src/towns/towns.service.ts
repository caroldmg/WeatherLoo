import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Town } from './towns.entity';

@Injectable()
export class TownsService {
    constructor(
        @InjectRepository(Town) private TownRepo: Repository<Town>
    ){}

    findAll(): Promise<Town[]>{ //con relaciones
        return this.TownRepo.find({
            relations: {
                province: true
            }
        })
    }



    findById(townCode: string): Promise <Town | null>{
        return this.TownRepo.findOne({
            where: {
                townCode: townCode
            }
        })
    }

    findAllByProvinceId(provinceId: string): Promise<Town[]>{
        return this.TownRepo.find({
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
