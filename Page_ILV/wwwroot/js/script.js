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
        }

        var mapa = new google.maps.Map(document.getElementById("map"), options);
        var marker = new google.maps.Marker({
            position: coordenadas,
            map: mapa,
            draggable: true,
            title: "Drag me!"
        });

        marker.addListener('dragend', function (event) {
            actualizar(this.getPosition().lat(), this.getPosition().lng());
        });

        actualizar(coordenadas.lat, coordenadas.lng);
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
        }

        var mapa = new google.maps.Map(document.getElementById("getmap"), options);

        datos.forEach(x => {
            return new google.maps.Marker({
                title: "Reporte #" + String(x.idReporte),
                position: { lat: x.geoubicacionRequest.latitud, lng: x.geoubicacionRequest.longitud },
                map: mapa
            });
        })
    });
}
function getByIdMap(dato) {
    const options = {
        center: { lat: dato.geoubicacionRequest.latitud, lng: dato.geoubicacionRequest.longitud },
        zoom: 14,
    }

    var mapa = new google.maps.Map(document.getElementById("getbyidmap"), options);
    var marker = new google.maps.Marker({
        title: "Reporte #" + String(dato.idReporte),
        position: { lat: dato.geoubicacionRequest.latitud, lng: dato.geoubicacionRequest.longitud },
        map: mapa
    });
}
function editMap(dato) {
    const options = {
        center: { lat: dato.geoubicacionRequest.latitud, lng: dato.geoubicacionRequest.longitud },
        zoom: 14,
    }

    var mapa = new google.maps.Map(document.getElementById("editmap"), options);
    var marker = new google.maps.Marker({
        title: "Reporte #" + String(dato.idReporte),
        position: { lat: dato.geoubicacionRequest.latitud, lng: dato.geoubicacionRequest.longitud },
        draggable: true,
        map: mapa
    });

    marker.addListener('dragend', function (event) {
        actualizar(this.getPosition().lat(), this.getPosition().lng());
    });
}
function actualizar(latitud, longitud) {
    var event = new Event('change');

    var lat = document.getElementById("latitud");
    var lng = document.getElementById("longitud");

    lat.value = latitud;
    lng.value = longitud;

    lat.dispatchEvent(event);
    lng.dispatchEvent(event);
}
/*marker.addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent(marker.getTitle());
    infoWindow.open(marker.getMap(), marker);
});*/