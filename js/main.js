(function ($) {
    // Instantiate MixItUp:
    $('#Container').mixItUp();
})(jQuery);

function myMap() {
  var myCenter = new google.maps.LatLng(37.7751812,-122.4397057);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 16};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}

