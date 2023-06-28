function initMap() {
    // Crea el mapa
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  
    // Crea los marcadores
    var marker1 = new google.maps.Marker({
      position: {lat: -34.397, lng: 150.644},
      map: map,
      title: 'Ubicación 1'
    });
  
    var marker2 = new google.maps.Marker({
      position: {lat: -34.873, lng: 150.876},
      map: map,
      title: 'Ubicación 2'
    });
  }
  
