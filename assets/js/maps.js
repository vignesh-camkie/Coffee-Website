/*jshint esversion: 6 */
//rendering the map to the page
//code is derived and edited from google maps platform
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 12.880042,


            lng: 79.120459
        }
    });

    // create label with string for the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // create an array which contains objects where the coffee shops located.
    const locations = [{
            lat: 12.880042,
            lng: 79.120459
        },
        {
            lat: 12.880042,
            lng: 79.120459
        },
        {
            lat: 12.880042,
            lng: 79.120459
        },       
    ];

    // create a new marker 
    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });

    // add a marker clusterer
    new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}