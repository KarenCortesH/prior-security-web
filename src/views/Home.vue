<template>
  <div class="container">
    <div class="row">
      <div
        class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 centered"
        v-if="!currentUser"
      >
        <div class="form-group text-center">
          <div class="spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div
        class="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 centered"
        v-if="currentUser"
      >
        <div v-if="loading" class="form-group text-center">
          <div class="spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div v-if="!loading" class="form-group">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            id="btnEmitAlert"
            @click="onBtnEmitAlertClick"
          >
            Emitir alerta
          </button>
        </div>
        <div class="form-group">
          <a
            class="btn btn-primary btn-lg btn-block"
            href="https://www.cali.gov.co/observatorios/publicaciones/147472/indicadores/"
            target="_blank"
            role="button"
            >Reportes de seguridad</a
          >
        </div>
        <div v-if="message" class="form-group">
          <div
            class="alert"
            role="alert"
            :class="successful ? 'alert-success' : 'alert-danger'"
          >
            {{ message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { alertService } from '../modules/alerts/alerts.service';
import { getFromObjectPathParsed } from '../utils';

export default {
  name: 'Home',
  data() {
    return {
      successful: false,
      loading: false,
      message: '',
      currentUser: null,
      longitude: null,
      latitude: null
    };
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      const { type, payload } = mutation;

      // console.log("mutation.type", type);
      // console.log("mutation.payload", payload);

      if (type === 'setUser' && payload && payload.uid) {
        this.currentUser = payload;
      }
    });
  },
  mounted() {
    this.getLonAndLat()
      .then(result => {
        this.longitude = result.longitude;
        this.latitude = result.latitude;
      })
      .catch(err => {
        this.successful = false;
        this.message = err.message;
        this.loading = false;
      });
  },
  methods: {
    async onBtnEmitAlertClick(args) {
      this.loading = true;

      try {
        const result = await this.getLonAndLat();

        if (!result.longitude || !result.latitude) {
          throw new Error(
            'no se pudo obtener la geolocalización para emitir la alerta.'
          );
        }

        this.longitude = result.longitude;
        this.latitude = result.latitude;
      } catch (error) {
        this.successful = false;
        this.message = error.message;
        this.loading = false;
        return;
      }

      try {
        const { message } = await alertService.emitAlert({
          userId: this.currentUser.id,
          longitude: this.longitude,
          latitude: this.latitude
        });
        this.successful = true;
        this.message = message;
      } catch (error) {
        this.successful = false;
        this.message =
          getFromObjectPathParsed(error, 'response.data.message') ||
          error.message;
      }

      this.loading = false;
    },
    async getLonAndLat() {
      const { geolocation } = navigator;

      return new Promise((resolve, reject) => {
        if (!geolocation) {
          return reject('geolocation is not supported by this browser.');
        }

        geolocation.getCurrentPosition(
          (position) => {
            const result = {
              longitude: position.coords.longitude,
              latitude: position.coords.latitude
            };

            console.log('result', result);

            return resolve(result);
          },
          (err) => reject(err)
        );
      });
    }
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