
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.736946, lng: -9.142685 },
    zoom: 8,
    mapTypeId: "terrain"
  });

//marcador 1 Santarém
  const marker1 =  new google.maps.Marker({
    position: {lat: 39.2362 , lng: -8.68707 },
    map: map,
    label: "Bus",
    tittle: "Lisboa",
    draggable: false,
    animation:google.maps.Animation.DROP
});

const infoWindow1 = new google.maps.InfoWindow({
  content : "<p>Equipa de Recolha 1"
});
infoWindow1.open(map,marker1);


//marcador 2 Odivelas
const marker2 =  new google.maps.Marker({
  position: {lat: 38.7926900 , lng: -9.1838000 },
  map: map,
  label: "Bus",
  tittle: "Lisboa",
  draggable: false,
  animation:google.maps.Animation.DROP
});

const infoWindow2 = new google.maps.InfoWindow({
content : "<p>Equipa de Recolha 2"
});
infoWindow2.open(map,marker2);



//marcador 3 Evora
const marker3 =  new google.maps.Marker({
  position: {lat: 38.571, lng: -7.9096 },
  map: map,
  label: "Bus",
  tittle: "Lisboa",
  draggable: false,
  animation:google.maps.Animation.DROP
});

const infoWindow3 = new google.maps.InfoWindow({
content : "<p>Equipa de Recolha 3"
});
infoWindow3.open(map,marker3);



//marcador 4 Sintra
const marker4 =  new google.maps.Marker({
  position: {lat: 38.7984, lng: -9.38811 },
  map: map,
  label: "Bus",
  tittle: "Lisboa",
  draggable: false,
  animation:google.maps.Animation.DROP
});

const infoWindow4 = new google.maps.InfoWindow({
content : "<p>Equipa de Recolha 4"
});
infoWindow4.open(map,marker4);

}

