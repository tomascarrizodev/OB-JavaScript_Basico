// funciones

function siempreTrue () {
    return true
}

async function asincrona() {
    return setTimeout(() => {
        console.log('Hola soy una promesa')
    }, 5000);
}

function* idPares () {
    let id = 0
    while (true) {
        yield id += 2
    }
}