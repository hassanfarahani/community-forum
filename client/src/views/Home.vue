<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-3">Welcome to Community!</h1>
      <p class="lead">A fully open source forum made by Hassan.</p>
      <hr class="my-4">
      <p>This forum is all about community. Be kind! Be Helpful!</p>
      <p class="lead">
        <a
          v-if="!user"
          class="btn btn-warning btn-lg"
          :href="getLoginURL"
          role="button">Login with Google</a>
        <router-link
          else
          :to="{name: 'forum'}"
          class="btn btn-primary btn-lg"
          role="button">Go to Forum</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState(['user']),
    getLoginURL() {
      if (window.location.hostname === 'localhost') {
        return 'http://localhost:3000/auth/google'
      } else {
        return 'http://community-forum-server.herokuapp.com/auth/google'
      }
    }
  }
};
</script>
