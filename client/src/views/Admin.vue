<template>
    <h1>Admin View</h1>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    async created() {
        const admin = this.isAdmin()
        if (!admin) {
            this.$router.push({name: 'Forum'})
        }
    },
    methods: {
        ...mapActions(['isAdmin'])
    }

}
</script>