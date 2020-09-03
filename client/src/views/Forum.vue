<template>
    <section class="mt-3">
        <category-list :categories="categories" />
    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['categories'])
    }
}
</script>