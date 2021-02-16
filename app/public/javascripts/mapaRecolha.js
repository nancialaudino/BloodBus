
var map;
var userLocation = null;
var route = null;

window.onload = async function() {

  map = L.map('map',{minZoom: 1}).setView(new L.LatLng(38.7476289, -9.1518309), 9);

  //Saber o local do utilizador e colocar um marker no mapa
  map.locate({setView: false, maxZoom: 9});
  map.on('locationfound', function onLocationFound(e) {
      userLocation = e.latlng;
      L.marker(e.latlng).addTo(map);
  });

  /*
  map = L.map('map',{minZoom: 1}).setView(new L.LatLng(38.7476289, -9.1518309), 9);
  navigator.geolocation.getCurrentPosition(function(location) {
    userLocation = new L.LatLng(location.coords.latitude, location.coords.longitude);
    L.marker(userLocation).addTo(map);
  });
  */

  //Vai buscar as informações do ponto de recolha
  try {

    let recolhas = await $.ajax({
        url: "/api/localizacoes",
        method: "get",
        dataType: "json"
    });

    //Vai fazer zoom no primeira recolha que estiver na lista
    map.panTo(new L.LatLng(recolhas[0].lat, recolhas[0].lon));

    //Vai colocar um marcador em cada ponto de recolha no mapa
    for (let recolha of recolhas) {

      //Criar o marcador
      let marker = new L.marker(new L.LatLng(recolha.lat, recolha.lon)).addTo(map);

      //criar popup de quando clico num marcador
      marker.bindPopup('Endereço: ' + recolha.endereco + "</br>" + 'EquipaRecolha: ' + recolha.id_equipaRecolha);

      marker.on("click", function() {
        marker.openPopup(); //Abrir o popup
        if (userLocation != null) {
          calcularRota(recolha.lat, recolha.lon); //Calcular a rota
        }
      });

    }

    L.tileLayer('https://api.mapbox.com/styles/v1/pcmiguel/ckhsyjp813gxb19qq3eqydsmu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicGNtaWd1ZWwiLCJhIjoiY2toc3lncG1zMGllajJxcGkxYnNjanVieCJ9.yfUra6VpwwsP4dGk9badRA', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

  } catch(err) {
      console.log(err);
  }

}

function calcularRota(recolha_lat, recolha_lng) {

  if (route != null) { //Vai remover a rota se nao for null para não ficar duplicado
    map.removeControl(route);
  }

  let lat = userLocation.lat;
  let lng = userLocation.lng;

  route = L.Routing.control({
      waypoints: [
        L.latLng(lat, lng),
        L.latLng(recolha_lat, recolha_lng)
      ],
      waypointMode: 'snap',
      createMarker: function() {} //Remover Waypoints
    }).addTo(map);
}

