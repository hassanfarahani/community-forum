<template>
    <h1>logging in ...</h1>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'login-token',
    mounted() {
        const { token } = this.$route.params
        console.log('token:', token)
        if (token) {
            this.login(token)
            this.$router.push({name: 'forum'})
        } else {
            this.$router.push({name: 'Home'})
        }
    },
    methods: {
        ...mapActions(['login'])
    }
}
</script>