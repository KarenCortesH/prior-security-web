<template>
  <div class="container">
    <div class="row">
      <div
        v-if="state === 'error'"
        class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 centered"
      >
        <div class="alert alert-danger text-center" role="alert">
          {{ message }}
        </div>
      </div>
      <div
        v-if="state !== 'error'"
        class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 centered text-center"
      >
        <p>
          Desde este punto se emitio la alerta de {{ name }}
        </p>
        <Map :center="{ lat: latitude, lng: longitude }" />
      </div>
    </div>
  </div>
</template>

<script>
import Map from '../components/Map';

export default {
  name: 'ViewAlert',
  data() {
    return {
      state: null,
      message: null,
      longitude: null,
      latitude: null,
      name: null
    };
  },
  components: {
    Map
  },
  created() {
    const query = this.$route.query;

    const { longitude, latitude, name } = query;

    if (!longitude || !latitude || !name) {
      this.state = 'error';
      this.message = 'some parameters are missing.';
    }

    this.longitude = longitude;
    this.latitude = latitude;
    this.name = name;
  }
};
</script>

<style scoped>
.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
</style>