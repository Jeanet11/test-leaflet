

$("#btn-ok").click(function() {
   
    
    var add_url = '';
   
    var address = $('#address').val();
    var city = $('#city').val();
    var tab = address.split(' ');
    var length = tab.length;
    // console.log(tab);
    for(var i =0; i < length-1; i++ ){
        add_url += tab[i] + "+";
    }
    add_url += tab[length-1];
    // console.log(address+' '+city);
    add_url = city + '+' + add_url;
    console.log(add_url);
    

    
    
// var add_url = 'Paris+rue+des+Annelets';
var url ='http://nominatim.openstreetmap.org/search?q='+add_url+'&format=json'
// var url = 'http://nominatim.openstreetmap.org/search?q=Paris+rue+des+Annelets&format=json';

var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

var map;
var result;
// var lat;
// var long;
xhr.onload = function () {
    //
        result = JSON.parse(xhr.responseText);
        // var lat = result[0].lat;
        // var long = result[0].long;
        console.log(result[0].lat, result[0].lon);
        map = L.map('map').setView([result[0].lat, result[0].lon], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([result[0].lat, result[0].lon]).addTo(map)
        .bindPopup(address)
        .openPopup();
        // console.log(lat);
    };
// }
    xhr.send();
    
});
// var map = L.map('map').setView([43.105, 2.09], 13);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([43.1, 2.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();
