// Listas
const listaCompra = [ 'Leche', 'Huevos', 'Carne', 'Pollo', 'Verdura' ]

listaCompra.push('Aceite de Girasol')

listaCompra.pop()

const peliculas = [
    {nombre: 'El gran truco', dir: 'Christopher Nolan', fecha: new Date(2006, 10, 30)},
    {nombre: 'Forrest Gump', dir: 'Robert Zemeckis', fecha: new Date(1994, 9, 6)},
    {nombre: 'El lobo de Wall Street', dir: 'Martin Scorsese', fecha: new Date(2014, 0, 2)}
]

const peliculasPost2010 = peliculas.filter(p => p.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(e => e.dir)

const titulos = peliculas.map(e => e.nombre)

const titulosYDirectores = titulos.concat(directores)

const titulosYDirectores2 = [...titulos, ...directores]