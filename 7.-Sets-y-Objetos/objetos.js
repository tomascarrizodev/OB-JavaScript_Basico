// objetos

const misDatos = {
    nombre: 'Tomás',
    apellido: 'Carrizo',
    edad: 23,
    altura: 175,
    eresDesarrollador: true
}

const edad = misDatos.edad

const lista = [
    {
        ...misDatos
    }, 
    {
        nombre: 'Alex',
        apellido: 'Giovine', 
        edad: 22, 
        altura: 185, 
        eresDesarrollador: false
    }, 
    {
        nombre: 'Mariano', 
        apellido: 'Molina', 
        edad: 22, 
        altura: 171, 
        eresDesarrollador: true
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)