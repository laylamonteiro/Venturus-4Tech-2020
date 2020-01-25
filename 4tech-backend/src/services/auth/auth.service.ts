import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { LoginViewModel } from 'src/domain/login.viewmodel';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService){
    }

    async login(login: LoginViewModel){
        const user = await this.userService.attemptLogin(login)

        if (!user){
            throw new BadRequestException('User login and/or password are incorrect')
        }
        
        return {
            access_token: this.jwtService.sign({ status: 'Authorized' }),
            userId: user._id,
        }
    }
}
