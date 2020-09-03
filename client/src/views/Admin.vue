<template>
<section>
    <h1>Community Settings</h1>
    <category-list :categories="categories" />
    <div class="mt-4">
        <h3>Add Category</h3>
        <form @submit.prevent="addCategory(newCategory)">
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="newCategory.title" class="form-control" id="title" required />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea v-model="newCategory.description" class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input v-model="newCategory.image_url" class="form-control" id="image" />
            </div>
            <button type="submit" class="btn btn-success">Add Category</button>
        </form>
    </div>
</section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            newCategory: {
                title: '',
                description: '',
                image_url: ''
            }
        }
    },
    async created() {
        const admin = this.isAdmin()
        if (!admin) {
            this.$router.push({name: 'Forum'})
        }
    },
    computed: {
        ...mapState(['categories'])
    },
    methods: {
        ...mapActions(['isAdmin', 'addCategory'])
    }

}
</script>