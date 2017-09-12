function initMap() {
  var coor = {lat: -25.363, lng: 131.044}
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: coor});
  var marker = new google.maps.Marker({position: coor, map: map});
}
