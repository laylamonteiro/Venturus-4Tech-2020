const tecnologias = [
    'ReactJs',
    'NestJs',
    'C puro raiz',
    'Java'
]

const upperCase = tecnologias.map(tech => {
    if (tech.length > 5){
        console.log(tech.toUpperCase())
       }
})

const upperCase2 = tecnologias
    .filter(tech => tech.length > 5)
    .map(tech => tech.toUpperCase())
    console.log(upperCase2)

const upperCase3 = tecnologias
    .map(tech => {
        if (tech.length > 5) {
            return tech.toUpperCase()
        }
        else {
            return tech
        }})



