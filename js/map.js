var map = L.map('map');

map.setView([51.505, -0.09], 10);

L.tileLayer('http://{s}.tile.cloudmade.com/4eb64c2677784cbdbbe3f9315b34b2fd/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);



// $('center-map').click(function () {

//     map.locate({
//         setView: true,
//         enableHighAccuracy: true,
//         maxZoom: 15
//     });

//     console.log("Pressed the button!");
// });



var gl;

function displayPosition(position) {
  var p = document.getElementById("p");
  p.innerHTML = "<table class='table'><tr><th>Timestamp</th><td>" + position.timestamp +
  "<tr><th>Latitude (WGS84)</th><td>" + position.coords.latitude + " deg</td></tr>" +
  "<tr><th>Longitude (WGS84)</th><td>" + position.coords.longitude + " deg</td></tr></table>";
}

function displayError(positionError) {
  alert("Error");
}

gl = navigator.geolocation;

if (gl) {
  gl.getCurrentPosition(displayPosition, displayError);
} else {
  alert("Geolocation services are not supported by your web browser.");
}