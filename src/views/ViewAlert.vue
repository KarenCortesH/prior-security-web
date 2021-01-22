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
        class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 centered"
      >
        <p>
          we are going to show the marker in map for longitude
          {{ longitude }} and latitude {{ latitude }} alert emitted by
          {{ name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
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