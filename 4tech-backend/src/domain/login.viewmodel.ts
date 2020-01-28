import { IsNotEmpty, Length } from 'class-validator'

export class LoginViewModel {

    @IsNotEmpty()
    @Length(3, 50)
    readonly userLogin: string

    @IsNotEmpty()
    @Length(8, 50)
    readonly password: string
}