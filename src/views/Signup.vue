<template>
  <h5 class="card-header">Registrate</h5>
  <div class="card-body">
    <input
      type="text"
      class="form-control"
      placeholder="Full Name"
      id="fullName"
    />
    <br />

    <input
      type="email"
      class="form-control"
      placeholder="Email"
      id="email"
    />
    <br />
    <input
      type="password"
      class="form-control"
      placeholder="Password"
      id="password"
    />

    <br />
    <input
      type="password"
      class="form-control"
      placeholder="Confirm Password"
      id="repeatedPassword"
    />

    <br />
    <input
      type="number"
      class="form-control"
      placeholder="Contact Number"
      id="contactNumber"
    />
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" /> Remember me
      </label>
    </div>

    <a href="#" type="submit" class="btn btn-primary">Submit</a>
  </div>
</template>

