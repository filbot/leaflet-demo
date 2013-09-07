var map = L.map('map').setView([37.808, -122.24], 15);

L.tileLayer('http://{s}.tile.cloudmade.com/4eb64c2677784cbdbbe3f9315b34b2fd/997/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18
}).addTo(map);