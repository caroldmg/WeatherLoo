import { Body, Controller, UseGuards, Request, Delete, Get, Post, Put, UnauthorizedException, UploadedFile, UseInterceptors, Param } from '@nestjs/common';
import { UsersService } from './users.service';

import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from './users.entity';
import { TownsService } from 'src/towns/towns.service';


@Controller('users')
export class UsersController {

    constructor(
        private userService: UsersService,
        private townService: TownsService
        ) {}


    @UseGuards(AuthGuard('jwt'))
    @Get('current')
    findCurrentUser(@Request() request): Promise<User> {
        return request.user;
    }

    @UseGuards(AuthGuard('jwt'))
    @Put()
    async update(@Request() request, @Body() user: User): Promise<User> {

        // si el id de request.user.id no coincide con user.id
        if (request.user.id !== user.id)
            throw new UnauthorizedException('No se puede editar');

        return await this.userService.update(user);
        // TODO: en caso de actualizar datos que están en el token JWT será necesario
        // crear un nuevo token JWT y devolverlo para que se actualice en frontend
    }

    // avatar (se puede separar a un nuevo controlador FilesController o AvatarController)
    @UseGuards(AuthGuard('jwt'))
    @Post('avatar')
    @UseInterceptors(FileInterceptor('file'))
    async uploadAvatar(@Request() request, @UploadedFile() file: Express.Multer.File) {
        console.log(file);
        request.user.avatarImage = file.filename;
        console.log(request.user);
        return await this.userService.updateAvatar(request.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('delete')
    async deleteById(@Request() request): Promise <void>{
        const userId = request.user['id']
        await this.userService.deleteById(userId);
    }

    // llamar aquí desde servicio angular
    @Get('/add/:townCode')
    async addFavouriteTown(
        @Request() request, 
        @Param("townCode") townCode: string): Promise<void> {

        console.log('soy el request' +request);
        

       let user = await this.userService.findById(request.user.id);

         if (!user.favTowns) user.favTowns = [];

        let town = await this.townService.findById(townCode);
        user.favTowns.push(town);

        this.userService.updateFavTowns(request.user);
    }

    // @Post('/add/:townCode')
    // async addFavouriteTown(@Request() request, @Param("townCode") townCode: string): Promise<void> {

    //    let user = await this.userService.findById(request.user.id);

    //     if (!user.favTowns) user.favTowns = [];

    //     let town = await this.townService.findById(townCode);
    //     user.favTowns.push(town);

    //     this.userService.updateFavTowns(request.user);
    // }
    
}
