import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from 'src/repositories/user-repository/user-repository';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { LoginViewModel } from 'src/domain/login.viewmodel';

@Injectable()
export class UserService {

    constructor(readonly userRepository: UserRepository){

    }

    getUsers(){
        return this.userRepository.getUsers()
    }

    async createNewUser(newUser: UserViewModel){
        const userList = await this.userRepository.getUsers()

        const existingUser = userList.find(x => x.userName === newUser.userName)

        if (existingUser){
            throw new BadRequestException('This username already exists')
        }

        return this.userRepository.createUser(newUser)
    }

    async attemptLogin(login: LoginViewModel) {
        const userList = await this.userRepository.getUsers()

        const foundLogin = userList.find(x => 
            x.userLogin === login.userLogin
            && 
            x.password === login.password)
        
        return foundLogin
    }
}

///////////////////////////////////////////////////////////////////////////////////
/*
    deleteUser(delUser: UserViewModel){
        const userList: UserViewModel[] = this.userRepository.getUsers();

        const originalSize = userList.length;

        // FIND USER
        // Se nao tiver, nao existe = throw new exception
        // se tiver, prossegue

        const existingUser = userList.filter(x => 
            (x.userName !== delUser.userName && 
            x.userLogin !== delUser.userLogin && 
            x.password !== delUser.password));

        const newSize = existingUser.length;

        if(originalSize > newSize){
            return 'User successfully removed';
        } else{
            throw new BadRequestException('User not found');
        }
        
    }
*////////////////////////////////////////////////////////////////////////////////////