<template>
  <h5 class="card-header">Login</h5>
  <br />
  <div class="card-body">
    <br />
    <input type="email" class="form-control" placeholder="Email" id="email" />
    <br />
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      id="password"
    />

    <br />
    <a href="#" type="submit" class="btn btn-primary">Login</a>
    <div class="alert alert-light" role="alert">
      <router-link to="/resetpassword">Forgot your password?</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Login',
  components: {}
};
</script>
