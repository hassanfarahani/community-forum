<template>
  <div id="app">
    <appNav />
    <router-view class="container" />
  </div>
</template>

<script>
import appNav from '@/components/AppNav.vue'

export default {
  components: {
    appNav
  }
}

</script>

<style lang="scss">

</style>
