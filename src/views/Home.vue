<template>
  <div>
    <div class="header">
      <h2>All Posts</h2>
      <router-link :to="{ name: 'AddPost'}">
        <button>New Post</button>
      </router-link>
    </div>
    <div v-for="post in allPosts" :key="post.id">
      <SinglePost :post="post"/>
      <hr>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import SinglePost from '@/components/SinglePost.vue'
import { computed } from '@vue/reactivity'

export default {
  name: 'Home',
  components: {
    SinglePost
  },
  setup(){
    const store = useStore()

    const allPosts = computed(() => store.state.posts)
    return {
      allPosts
    }
  }
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
}

.header button {
  display: inline-block;
  margin: 15px 10px;
  background: #00ce89;
  color: white;
  border: 0;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
}
</style>
