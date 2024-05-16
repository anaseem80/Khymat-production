import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps"; // Import package
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDjjZzMmPfqAB8xbfhXhr2yiEaJ8n5EiDg",
    libraries: "places",
  },
});