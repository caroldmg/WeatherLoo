import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { LoginDTO } from 'src/auth/dto/login.dto';

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
