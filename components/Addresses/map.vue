<template>
  <div id="map" class="col-span-2" style="height:500px"></div>
</template>

<script setup>
  // Stores
  const addressStore = useMyAddressStore();

  // Vars
  let googleMapsImportedd = false;
  var map;
  var marker;

  // Map Functions
  function myMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos){
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        var myCenter = new google.maps.LatLng(lat,lng);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 17, mapTypeId: google.maps.MapTypeId.TERRAIN}
        map = new google.maps.Map(mapCanvas, mapOptions);
        marker = new google.maps.Marker({position: myCenter});
        marker.setMap(map);

        getLocationID(lat, lng);
      });
    } else {
    }

    google.maps.event.addListenerOnce(map, 'click', function(event) {
      placeMarker(event.latLng);
    });
  }
  function getLocationID(latitude, longitude) {
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0] && results[0].place_id) {
          const placeId = results[0].place_id;
          addressStore.location_id = placeId

        } else {
        }
      } else {
      }
    });
  }
  if (!googleMapsImportedd) {
      // Import the Google Maps API URL
      import('https://maps.googleapis.com/maps/api/js?key=AIzaSyDjjZzMmPfqAB8xbfhXhr2yiEaJ8n5EiDg&callback=initMap').then(() => {
          googleMapsImportedd = true;
          myMap()
      }).catch((error) => {
          console.error('Error importing Google Maps API:', error);
      });
  }

  onMounted(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else { 
        alert("Geolocation is not supported by this browser.");
      }
    }
    const showPosition = (position) => {
      AddressStore.latitudes = position.coords.latitude;
      AddressStore.longitude = position.coords.longitude;
    }
    getLocation()
  })
</script>

<style>

</style>