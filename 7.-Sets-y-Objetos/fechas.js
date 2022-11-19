// fechas

const fechaHoy = new Date()

const fechaNacimiento = new Date(1999, 8, 5)

const comparacion = fechaHoy > fechaNacimiento

const diaNacimiento = fechaNacimiento.getDate()

const mesNacimiento = fechaNacimiento.getMonth() + 1

const anyoNacimiento = fechaNacimiento.getFullYear()