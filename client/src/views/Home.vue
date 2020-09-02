<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>This forum is all about community. Be kind! Be Helpful!</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" :href="getLoginURL" role="button">Login with Google</a>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    getLoginURL() {
      if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google'
      } else {
        return 'https://community-forum-api.vercel.app/auth/google'
      }
    }
  }
};
</script>
