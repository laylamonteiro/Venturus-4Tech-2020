let listaDeUsuarios = [
    {
        login: 'layla',
        password: '123',
        name: 'Layla',
        age: 25

    },
    {
        login: 'fabio',
        password: '123',
        name: 'Fábio',
        age: 25
    },
    {
        login: 'danilo',
        password: '123',
        name: 'Danilo',
        age: 28
    }
]

const maisDe25Anos = listaDeUsuarios.filter(user => user.age > 25)
//console.log(maisDe25Anos)

const found = listaDeUsuarios.find(user => user.login === 'fabio' && user.password === '123')
//console.log(found)

listaDeUsuarios= listaDeUsuarios.map(user => {
    return {...user, name: user.name.toUpperCase()}
})
//console.log(listaDeUsuarios)


//Função que atualiza o salário em 3%
const listaDeSalarios = [
    1000,
    2000,
    3000,
    4000,
    5000
]
const salarioAtualizado = listaDeSalarios.map(salario => salario * 1.03)
console.log(salarioAtualizado)