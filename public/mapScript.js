var map = L.map('map').setView([51.2171918, 4.4212529], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a> contributors'
}).addTo(map);

// for(var k in jsonData) {
//     console.log(jsonData.features[k].geometry.x);
// }
console.log(jsonData.features[0].geometry.X);

L.geoJSON(jsonData,{onEachFeatures: function (feature, layer) {
    layer.bindPopup(feature.attributes.naam);
}}).addTo(map);