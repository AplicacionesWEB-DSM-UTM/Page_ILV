const { map } = require("jquery");

function initMap() {
    let lugarinfo = []
    const ubicacion = new Localizacion(() => {
        const coordenadas = {
            lat: ubicacion.latitude,
            lng: ubicacion.longitude
        }
        const options = {
            center: coordenadas,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var mapa = new google.maps.Map(document.getElementById("map"), options);
        var marker = new google.maps.Marker({
            position: coordenadas,
            map: mapa,
            draggable: true,
            title: "Drag me!"
        });

        marker.addListener('dragend', function (event) {
            document.getElementById("latitud").value = this.getPosition().lat();
            document.getElementById("longitud").value = this.getPosition().lng();
        });

        document.getElementById("latitud").value = ubicacion.latitude;
        document.getElementById("longitud").value = ubicacion.longitude;
    });
}
function getMap(datos) {
    let lugarinfo = []
    const ubicacion = new Localizacion(() => {
        const coordenadas = {
            lat: ubicacion.latitude,
            lng: ubicacion.longitude
        }
        const options = {
            center: coordenadas,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var mapa = new google.maps.Map(document.getElementById("getmap"), options);

        datos.forEach(x => {
            return new google.maps.Marker({
                title: x.idreporte,
                position: { lat: parseFloat(x.geoubicacionRequest.latitud), lng: parseFloat(x.geoubicacionRequest.longitud) },
                map: mapa
            });
        })
    });
}
function getByIdMap(dato) {
    const coordenadas = {
        lat: parseFloat(dato.latitud),
        lng: parseFloat(dato.longitud)
    }
    const options = {
        center: coordenadas,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var mapa = new google.maps.Map(document.getElementById("getbyidmap"), options);
    var marker = new google.maps.Marker({
        position: coordenadas,
        title: dato.ubicacion,
        map: mapa
    });

    marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
    });
}
function editMap(dato) {
    const coordenadas = {
        lat: parseFloat(dato.latitud),
        lng: parseFloat(dato.longitud)
    }
    const options = {
        center: coordenadas,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var mapa = new google.maps.Map(document.getElementById("editmap"), options);
    var marker = new google.maps.Marker({
        position: coordenadas,
        title: dato.idGeoubicacion,
        draggable: true,
        map: mapa
    });

    marker.addListener('dragend', function (event) {
        document.getElementById("latitud").value = this.getPosition().lat();
        document.getElementById("longitud").value = this.getPosition().lng();
    });
}