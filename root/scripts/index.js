var cultuurLocatiesGeoJson = 'cultuurlocaties.geojson';

var mymap = L.map('mapid').setView([51.505, -0.09], 13);


L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);


var marker = L.marker([51.5, -0.09]).addTo(mymap);

L.geoJSON(geojsonFeature).addTo(mymap);

