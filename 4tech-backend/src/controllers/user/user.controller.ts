import { Controller, Get, Post, Body } from '@nestjs/common';
import { get } from 'http';
import { UserService } from 'src/services/user/user.service';
import { UserViewModel } from 'src/domain/user.viewmodel';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){

    }

    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @Post()
    createUser(@Body() newUser: UserViewModel){
        return this.userService.createNewUser(newUser)
    }
}