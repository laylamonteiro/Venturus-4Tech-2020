import { IsNotEmpty, Length } from 'class-validator'

export class UserViewModel {

    constructor( userLogin: string, userName: string, password: string){
        this.userLogin = userLogin
        this.userName = userName
        this.password = password
    }

    @IsNotEmpty()
    @Length(3, 50)
    readonly userLogin: string

    @IsNotEmpty()
    @Length(3, 50)
    readonly userName: string

    @IsNotEmpty()
    @Length(3, 50)
    readonly password: string
}