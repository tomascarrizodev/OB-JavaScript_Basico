const nombre = 'Tomas'
const apellido = 'Carrizo'
const persona = {
    nombre,
    apellido
}

// sessionStorage.setItem('objeto', JSON.stringify(persona))

// localStorage.setItem('objeto', JSON.stringify(persona))

const date = new Date()
const expire = new Date(date.getTime() + 120000)

// document.cookie = `persona=${JSON.stringify(persona)};expires=${expire.toUTCString()}`