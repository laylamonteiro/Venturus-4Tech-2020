import { axios4tech } from './config' 

//Função para fazer uma chamada para o backend e mostrar os posts que estão no banco de dados

export const getPosts = async (page = 0) => {
    return await axios4tech.get(`user-activity/${page}`)
}