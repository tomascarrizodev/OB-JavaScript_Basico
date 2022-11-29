const latBoca = -34.6354623
const lngBoca = -58.3652304

const latFrancia = 48.8583701
const lngFrancia = 2.2922926

const latCesars = 36.1170772
const lngCesars = -115.1770122

function initMap (lat = latBoca, lng = lngBoca, zoom = 17, title = 'La Bombonera') {
    let posicion = {
        lat,
        lng
    }

    let map = new google.maps.Map(document.querySelector('#map'), {
        zoom,
        center: posicion
    })

    let marker = new google.maps.Marker({
        position: posicion,
        map,
        title
    })
}
