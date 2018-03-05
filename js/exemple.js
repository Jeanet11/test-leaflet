

// function currentLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((function (position) {
//             var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
//             marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();
//             // modifiaction de l'affichage du popup
//             var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
//             marker.bindPopup("Espace 302 co-working<br>").openPopup();

//             // var circle = L.circle([43.22, 2.36], {
//             //     color: 'red',
//             //     fillColor: '#f03',
//             //     fillOpacity: 0.5,
//             //     radius: 500
//             // }).addTo(map);
//         }));
//     } else {
//         alert("La géolocalisation n'est pas supportée par ce navigateur.");
//     }
// }

// var map;
// function InitialiserCarte() {
    
//     // map = L.map('map'), 20;
//     // map = new L.Map('map', { zoomControl: false });
//     map = L.map('map', {
//         center: ['43.3276432', '2.48892379999995'],
//         zoom: 13,
        
//         zoomControl: false 
//     });

//     // map = L.map('macarte').setView([46.3630104, 2.9846608], 6);

//     //  map = L.map('map').setView([43.22, 2.36], 13);

//     L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//         attribution: 'Données de la carte &copy; <a href="http://www.openstreetmap.org/#map=5/51.500/-0.100">Open Street Map</a>',
//         minZoom: 8,
//         maxZoom: 17
//     }).addTo(map);

    

//     // create the tile layer with correct attribution
//     // var tuileUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

//     // var attrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

//     // var osm = L.tileLayer(tuileUrl, {
//     //     minZoom: 8,
//     //     maxZoom: 17,
//     //     attribution: attrib
//     // });

//     // osm.addTo(map);
   
//     //  var marker = L.marker([43.2167, 2.35]).addTo(map);

// }
// $(document).ready(function () {
//    InitialiserCarte();
// //     locateUser();
// });

// $('#myLocation').click(function (e) {
//     currentLocation();
// });

// function locateUser() {
//     map.locate({ setView: true, maxZoom: 20 });
// }
// $(document).ready(function () {
//     InitialiserCarte();
//     locateUser();
// });

