/* Watch position using geolocation API */
let locationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 3000
};
function watchLocation(loc_callback) {
    if (navigator.geolocation) {
        window.actualState.watchLocationId = navigator.geolocation.watchPosition(loc_callback, errorPosition, locationOptions);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function errorPosition(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
}