<template>
    <form @submit.prevent="editPost">
        <div class="title">
            <label>Title</label>
            <input type="text" v-model="title">
        </div>
        <div class="description">
            <label>Description</label>
            <textarea v-model="description"></textarea>
        </div>
        <div class="categories">
            <label>Select category</label>
            <AddCategory/>
            <div v-for="category in allCategories" :key="category.id" class="category">
                {{category.title}}
                <input type="checkbox" name="category" :value="category" v-model="checks"><br>
            </div>
        </div>  
        <button type="submit">Update Post</button>
    </form>
</template>

<script>
import { useStore } from 'vuex'
import AddCategory from '@/components/AddCategory'
import { computed, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
    name: 'EditPost',
    setup(props){
        const store = useStore()
        const router = useRouter()

        const post = store.getters.postById(props.id)
        const allCategories = computed(() => store.state.categories)

        const updatePost = (post) => store.dispatch('updatePost', post)

        const title = ref(post.title);
        const description = ref(post.description);
        const checks = ref(post.categories);

        const editPost = () => {
            const updPost = {
                id: props.id,
                title: title.value,
                description: description.value,
                categories: checks.value,
                showDetails: false
            }
            updatePost(updPost)
            router.push('/')
        }

        return {
            title,
            description,
            checks,
            allCategories,
            editPost
        }
    },
    props: ['id'],
    components: {
        AddCategory
    }
}
</script>

<style>

</style>