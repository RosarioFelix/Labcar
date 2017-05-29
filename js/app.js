
function initMap() {
    var laboratoriaLima = {
        lat: -12.1191427,
        lng: -77.0349046
}
   var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 18,
      center: laboratoriaLima
    });

    var infoWindow = new google.maps.InfoWindow({map: map});


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Here');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, map.getCenter());
    }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  };
};
