import { Injectable } from "@nestjs/common";
import { Strategy, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'

//A SECRET KEY NUNCA DEVE SER EXPOSTA PUBLICAMENTE
//
//A chave secreta só está a mostra a fins de deixar claro o que o código está fazendo
//Em um ambiente de produção, a cjave deve estar protegida por medidas apropriadas
//(como por exemplo, secret vaults, variáveis de ambiente ou serviços de configuração)
export const secretKey = 'wingardium leve rola'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secretKey,
        })
    }

    async validate(payload: any){
        return{ userLogin: payload.userLogin }
    }
}