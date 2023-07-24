import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDTO } from './dto/login.dto';
import { TokenDTO } from './dto/token.dto';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from './dto/register.dto';
import { User } from 'src/users/users.entity';

@Injectable()
export class AuthService {


    constructor(
        private userService: UsersService,
        private jwtService: JwtService
        ){}

    
    async login(login: LoginDTO): Promise<TokenDTO> {

        let user = await this.userService.findByEmail(login.email);

        if(!user) 
            throw new UnauthorizedException('Credenciales incorrectas'); // 401

        // comprobar contraseña cifrada:
        if(! bcrypt.compareSync(login.password, user.password)) 
            throw new UnauthorizedException('Credenciales incorrectas'); // 401

        let payload = {
            username: user.fullName,
            sub: user.id,
        }

        let token: TokenDTO = {
            token: await this.jwtService.signAsync(payload)
        }

        return token;

    }

    async refreshToken(user: User): Promise<TokenDTO> {
        let payload = {
            username: user.fullName,
            sub: user.id,
        }

        let token: TokenDTO = {
            token: await this.jwtService.signAsync(payload)
        }

        return token;    
    }

    async register(register: RegisterDTO): Promise<TokenDTO> {
        console.log(register);
        let loginDTO: LoginDTO = {
            email: register.email,
            password: register.password // contraseña original
        }

        let user = new User();
        user.fullName = register.fullName;
        user.email = register.email;
        user.password = bcrypt.hashSync(register.password, 10); // contraseña cifrada

        await this.userService.create(user);
        return await this.login(loginDTO);
    }
}
