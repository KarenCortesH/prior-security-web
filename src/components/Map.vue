
<template>
  <div id="map">
    <!--In the following div the HERE Map will render-->
    <div
      id="mapContainer"
      style="height: 400px; width: 100%"
      ref="hereMap"
    ></div>
  </div>
</template>

<script>
import environment from '../environment';

console.log(environment.HERE_MAPS_API_KEY);

export default {
  name: 'HereMap',
  props: {
    center: Object
    // center object { lat: 40.730610, lng: -73.935242 }
  },
  data() {
    return {
      platform: null,
      apikey: environment.HERE_MAPS_API_KEY
    };
  },
  async mounted() {
    // Initialize the platform object:
    const platform = new window.H.service.Platform({
      apikey: this.apikey
    });
    this.platform = platform;
    this.initializeHereMap();
  },
  methods: {
    initializeHereMap() {
      // rendering map

      const mapContainer = this.$refs.hereMap;
      const H = window.H;
      // Obtain the default map types from the platform object
      let maptypes = this.platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      let map = new H.Map(mapContainer, maptypes.vector.normal.map, {
        zoom: 13,
        center: this.center
        // center: { lat: 19.57438 , lng: -97.85857 }
      });

      addEventListener('resize', () => map.getViewPort().resize());

      // add behavior control
      new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

      // add marker
      const marker = new H.map.Marker({
        lat: this.center.lat,
        lng: this.center.lng
      });
      map.addObject(marker);

      // add UI
      H.ui.UI.createDefault(map, maptypes);
      // End rendering the initial map
    }
  }
};
</script>

<style scoped>
#map {
  min-width: 360px;
  text-align: center;
  margin: 5% auto;
  background-color: #ccc;
}
</style>