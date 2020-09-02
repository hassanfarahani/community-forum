<template>
  <div id="app">
    <appNav />
    <router-view class="container" />
  </div>
</template>

<script>
import appNav from '@/components/AppNav.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    appNav
  },
  methods: {
    ...mapActions(['login'])
  },
  mounted() {
    this.login(localStorage.getItem('token'))
  }
}

</script>

<style lang="scss">

</style>
