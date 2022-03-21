function AgregarCookie(llave, valor, min) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (min * 60 * 1000));
    document.cookie = llave + "=" + valor + "; expires=" + fecha.toGMTString() + "; path=/";
}
function EliminarCookie(llave) {
    document.cookie = llave + "=; max-age=0; path=/";
}