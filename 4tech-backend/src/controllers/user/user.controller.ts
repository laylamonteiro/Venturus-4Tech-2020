import { Controller, Get, Post, Body, UseGuards, Delete } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){

    }

    //Se precisar proteger toda a aplicação, colocar essa linha acima de @Controller
    @UseGuards(AuthGuard('jwt'))

    @Get()
    getUsers(){
        return this.userService.getUsers()
    }

    @Post()
    createUser(@Body() newUser: UserViewModel){
        return this.userService.createNewUser(newUser)
    }

    /*
    @Delete()
    deleteUser(@Body() delUser: UserViewModel){
        return this.userService.deleteUser(delUser)
    }
    */
}