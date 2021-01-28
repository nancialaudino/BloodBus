
var map;

// Ban Jelačić Square - City Center
var center = new google.maps.LatLng(38.736946,-9.142685 );

var geocoder = new google.maps.Geocoder();
var infowindow = new google.maps.InfoWindow();

var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();

function init() {

var mapOptions = {
zoom: 13,
center: center,
mapTypeId: google.maps.MapTypeId.ROADMAP
}

map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

directionsDisplay.setMap(map);
directionsDisplay.setPanel(document.getElementById('directions_panel'));

// Detect user location
if(navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {

var userLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

geocoder.geocode( { 'latLng': userLocation }, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {
document.getElementById('start').value = results[0].formatted_address;
}
});

}, function() {
alert('Geolocation is supported, but it failed');
});
}

makeRequest('/api/localizacoes', function(data) {

var data = JSON.parse(data.responseText);
var selectBox = document.getElementById('destination');

for (var i = 0; i < data.length; i++) {
displayLocation(data[i]);
addOption(selectBox, data[i]['nome'], data[i]['endereco']);
}
});
}

function displayLocation(Localizacao) {

var content =   '<div class="infoWindow"><strong>'  + Localizacao.nome + '</strong>'
+ '<br/>'  + Localizacao.endereco;

if (parseInt(Localizacao.lat) == 0) {
geocoder.geocode( { 'endereco': Localizacao.endereco }, function(results, status) {
if (status == google.maps.GeocoderStatus.OK) {

var marker = new google.maps.Marker({
map: map,
position: results[0].geometry.Localizacao,
title: Localizacao.nome
});

google.maps.event.addListener(marker, 'click', function() {
infowindow.setContent(content);
infowindow.open(map,marker);
});

/* Save geocoding result to the Database
var url =   'set_coords.php?id=' + location.id
+ '&amp;lat=' + results[0].geometry.location.lat()
+ '&amp;lon=' + results[0].geometry.location.lng();

makeRequest(url, function(data) {
if (data.responseText == 'OK') {
// Success
}
});*/
}
});
} else {

var position = new google.maps.LatLng(parseFloat(Localizacao.lat), parseFloat(Localizacao.lon));
var marker = new google.maps.Marker({
map: map,
position: position,
title: Localizacao.nome
});

google.maps.event.addListener(marker, 'click', function() {
infowindow.setContent(content);
infowindow.open(map,marker);
});
}
}

function addOption(selectBox, text, value) {
var option = document.createElement("OPTION");
option.text = text;
option.value = value;
selectBox.options.add(option);
}

function calculateRoute() {

var start = document.getElementById('start').value;
var destination = document.getElementById('destination').value;

if (start == '') {
start = center;
}

var request = {
origin: start,
destination: destination,
travelMode: google.maps.DirectionsTravelMode.DRIVING
};
directionsService.route(request, function(response, status) {
if (status == google.maps.DirectionsStatus.OK) {
directionsDisplay.setDirections(response);
}
});
}

function makeRequest(url, callback) {
var request;
if (window.XMLHttpRequest) {
request = new XMLHttpRequest(); // IE7+, Firefox, Chrome, Opera, Safari
} else {
request = new ActiveXObject("Microsoft.XMLHTTP"); // IE6, IE5
}
request.onreadystatechange = function() {
if (request.readyState == 4 && request.status == 200) {
callback(request);
}
}
request.open("GET", url, true);
request.send();
}




function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: { lat: 38.736946, lng: -9.142685  },
    });
    directionsRenderer.setMap(map);
  
    const onChangeHandler = function () {
      calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById("start").addEventListener("change", onChangeHandler);
    document.getElementById("end").addEventListener("change", onChangeHandler);
  }
  
  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
      {
        origin: {
          query: document.getElementById("start").value,
        },
        destination: {
          query: document.getElementById("end").value,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }

  

/*

//geolocationPage
var x = document.getElementById("geoLocation");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

$(document).on('click', '#getGeolocation', function(){
    console.log("clicked");
    getLocation();
});

//map page
var y = document.getElementById("map-canvas");
var mapLatitude;
var mapLongitude;
var myLatlng;

function getMapLocation() {
	console.log("getMapLocation");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showMapPosition);
    } else {
        y.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showMapPosition(position) {
	console.log("showMapPosition");
    mapLatitude = position.coords.latitude;
    mapLongitude = position.coords.longitude;
    myLatlng = new google.maps.LatLng(mapLatitude,mapLongitude);
    getMap();
}


var map;
function getMap() {
	console.log("getMap");
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(mapLatitude, mapLongitude)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

	var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title:"You are here!"
	});
}

$( document ).on( "pageshow", "#mapPage", function( event ) {
  getMapLocation();
});

//directionsPage
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var directionsMap;
var z = document.getElementById("directions-canvas");
var start;
var end;

function getDirectionsLocation() {
	console.log("getDirectionsLocation");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showDirectionsPosition);
    } else {
        z.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showDirectionsPosition(position) {
	console.log("showDirectionsPosition");
    directionsLatitude = position.coords.latitude;
    directionsLongitude = position.coords.longitude;
    directionsLatLng = new google.maps.LatLng(directionsLatitude,directionsLongitude);
    getDirections();
}

function getDirections() {
	console.log('getDirections');
  directionsDisplay = new google.maps.DirectionsRenderer();
  //start = new google.maps.LatLng(directionsLatLng);
  var directionsOptions = {
    zoom:12,
    center: start
  }
  directionsMap = new google.maps.Map(document.getElementById("directions-canvas"), directionsOptions);
  directionsDisplay.setMap(directionsMap);
  calcRoute();
}

function calcRoute() {
	console.log("calcRoute");
  start = directionsLatLng;
  end = "50 Rue Ste-Catherine O Montréal, QC H2X 1Z6";
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.TRANSIT
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}

$( document ).on( "pageshow", "#directionsPage", function( event ) {
  getDirectionsLocation();
});



*/


