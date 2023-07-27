import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { LoginDTO } from 'src/auth/dto/login.dto';
import { Town } from 'src/towns/towns.entity';

@Injectable()
export class UsersService {


    constructor(
        @InjectRepository(User) 
        private userRepo: Repository<User>,
    ){}

    findById(id: number): Promise<User | null> {
        return this.userRepo.findOne({ 
            relations:{
                favTowns: true
            },
            where: {
                id: id
            },
         });
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepo.findOne({ 
            relations:{
                favTowns: true
            },
            where: {
                email: email
            },
         });
    }

    async create(user: User): Promise<User> {
        try {
            return await this.userRepo.save(user);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('Cant save');
        }
    }

    async update(user: User): Promise<User> {
        let userFromDB = await this.userRepo.findOne({ 
            where: {
                id: user.id
            }
         });

         if(!userFromDB) throw new NotFoundException('User no encontrado');

         try {
            console.log(user);
            userFromDB.fullName = user.fullName;
            userFromDB.email = user.email;
            userFromDB.birthday = user.birthday;
            userFromDB.gender = user.gender;
            userFromDB.pets = user.pets;
            userFromDB.publicTransport = user.publicTransport;
            userFromDB.privateTransport = user.privateTransport;
            if (!userFromDB.favTowns) userFromDB.favTowns = [];
            userFromDB.favTowns = user.favTowns

            // TODO ver si actualizar desde aquí las favTowns o crear un método aparte
            return await this.userRepo.save(userFromDB);

         } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando user');
         }
    }

    async updateAvatar(user: User): Promise<User> {
        let userFromDB = await this.userRepo.findOne({ 
            where: {
                id: user.id
            }
         });
         if(!userFromDB) throw new NotFoundException('User no encontrado');

         try {
            userFromDB.avatarImage = user.avatarImage;
            return await this.userRepo.save(userFromDB);
         } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando user');
         }
    }

    async updateFavTowns(user: User): Promise<User>{
        let userFromDB = await this.userRepo.findOne({ 
            where: {
                id: user.id
            }
         });
         if(!userFromDB) throw new NotFoundException('User no encontrado');
         if (!userFromDB.favTowns) userFromDB.favTowns = [];
         try {
            userFromDB.favTowns = user.favTowns; 
            return await this.userRepo.save(userFromDB);
         } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando user');
         }
    }

    async deleteById(id: number): Promise <void>{
        let exist = await this.userRepo.exist({
            where: {
                id: id
            }
        });

        if(!exist) throw new NotFoundException('Not found');

        try {
            await this.userRepo.delete(id);
        } catch (error) {
            throw new ConflictException('No se puede borrar')
        }
    }

}
