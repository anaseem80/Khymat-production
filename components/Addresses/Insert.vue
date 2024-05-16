<template>
  <div 
    class="rounded-lg"
    :class="{
      'bg-white p-3 w-full md:w-8/12 m-auto relative': props.modal
    }"
  >
    <span class="absolute left-2 md:right-2" v-if="props.modal">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="close-modal text-gray-600 hover:text-red-600 w-6 h-6 cursor-pointer">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </span>
    <div class="flex md:flex-row flex-col md:p-4 gap-8">
      <Form
          class="w-full"
          @submit="onSubmitAddress"
          v-slot="{ errors }"
          :validation-schema="AddressSchema"
      >
      <div class="md:grid md:grid-cols-2 gap-4">
        <div class="form-group">
          <label for="name" class="text-lg block">{{ $t("First name") }}</label>
          <Field 
            type="text" 
            id="name" 
            name="name" 
            class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
            :class="{ 
              'is-invalid': errors.name,
            }"
          />
          <div class="invalid-feedback">{{ errors.name }}</div>
        </div>
        <div class="form-group">
          <label for="last_name" class="text-lg block">{{ $t("Last Name") }}</label>
          <Field 
            type="text" 
            id="last_name" 
            name="last_name" 
            class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
            :class="{ 
              'is-invalid': errors.last_name,
            }"
          />
          <div class="invalid-feedback">{{ errors.last_name }}</div>
        </div>
        <div class="form-group">
          <label for="email" class="text-lg block">{{ $t("Email") }}</label>
          <Field 
            type="email" 
            id="email" 
            name="email" 
            class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
            :class="{ 
              'is-invalid': errors.email,
            }"
          />
          <div class="invalid-feedback">{{ errors.email }}</div>
        </div>
        <div class="form-group">
          <label for="phone" class="text-lg block">{{ $t("Phone") }}</label>
          <Field 
            type="tel" 
            id="phone" 
            name="phone" 
            class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
            :class="{ 
              'is-invalid': errors.phone,
            }"
          />
          <div class="invalid-feedback">{{ errors.phone }}</div>
        </div>
        <div class="grid xl:grid-cols-1 md:col-span-2 gap-4">
          <div class="form-group">
            <label for="country" class="text-lg block">{{ $t("Country") }}</label>
            <Field 
              as="select"
              id="country" 
              name="country"
              class="rounded border p-3 outline-none w-full mt-4 focus:border-primary"
              :class="{ 
                'is-invalid': errors.country,
              }"
            >
            <option value="" disabled>{{ $t("Choose Country") }}</option>
            <option :value="country.name" v-for="country in MyCountriesStore.countries">
              {{ locale == 'en' ? country.name_en : country.name }}
            </option>
            </Field>
            <div class="invalid-feedback">{{ errors.country }}</div>
          </div>
        </div>
        <div class="grid xl:grid-cols-1 md:col-span-2 gap-4">
          <label for="address_2" class="text-lg block">{{ $t("Detailed address") }}</label>
          <Field 
              as="textarea"
              id="address_2" 
              name="address_2"
              class="w-full p-4 pb-[92px] rounded border outline-none focus:border-primary"
              :placeholder="$t(`Detailed address`)"
              :class="{ 
                'is-invalid': errors.address_2,
              }"
            >
          </Field>
          <div class="invalid-feedback">{{ errors.address_2 }}</div>
        </div>
        <div id="map" class="col-span-2" style="height:500px"></div>
      </div>
        <button 
          :disabled="AddressStore.loading_store_address"
          class="btn mt-6 w-full"
        >
        <span class="translate-y-[-2px]">{{ $t("Save Changes") }} <loading-outlined class="text-white drop-shadow-lg mr-3" v-if="AddressStore.loading_store_address"/></span> 
      </button>
    </Form>
    </div>
  </div>
</template>

<script setup>
  // Imports
  import * as Yup from "yup";

  // i18n
  const { locale } = useI18n();

  // Vars
  const props = defineProps(['modal'])
  const location_id = ref(null);
  let googleMapsImported = false;
  var map;
  var marker;

  // Map functions
  if (!googleMapsImported) {
      // Import the Google Maps API URL
      import('https://maps.googleapis.com/maps/api/js?key=AIzaSyDjjZzMmPfqAB8xbfhXhr2yiEaJ8n5EiDg&callback=initMap').then(() => {
          googleMapsImported = true;
          myMap()
      }).catch((error) => {
          console.error('Error importing Google Maps API:', error);
      });
  }

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

  function placeMarker(location) {
    // Remove previous marker
    if (marker) {
      marker.setMap(null);
    }
    // Add new marker
    marker = new google.maps.Marker({
      position: location,
      map: map
    });

    // Get the new latitude and longitude
    var newLat = location.lat();
    var newLng = location.lng();

    // Get location ID using Geocoder (for clicked location)
    getLocationID(newLat, newLng);
  }

  function getLocationID(latitude, longitude) {
    var geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(latitude, longitude);

    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0] && results[0].place_id) {
          const placeId = results[0].place_id;
          location_id.value = placeId
        } else {
        }
      } else {
      }
    });
  }

  const AddressSchema = Yup.object().shape({
    name: Yup.string().required('الاسم الأول مطلوب'),
    last_name: Yup.string().required('الاسم الأخير مطلوب'),
    email: Yup.string().required('البريد الإلكتروني مطلوب').email('البريد الإلكتروني غير صالح'),
    phone: Yup.string().required('رقم الهاتف مطلوب'),
    country: Yup.string().required('الدولة مطلوبة'),
    address_2: Yup.string().required('العنوان بالتفصيل مطلوب'),
  });

  // Stores
  const AddressStore = useMyAddressStore();
  const MyCountriesStore = useMyCountriesStore();
  MyCountriesStore.GET_COUNTRIES()
  
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

  // Insert Address
  const onSubmitAddress = async (address) =>{
    address.latitudes = AddressStore.latitudes.toString()
    address.longitude = AddressStore.longitude.toString()
    address.location_id = location_id.value
    AddressStore.STORE_ADDRESS(address)
  }
</script>

<style>

</style>