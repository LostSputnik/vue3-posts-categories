<template>
  <div class="post">
      <div class="actions">
        <div class="title" @click="post.showDetails = !post.showDetails">
          <h3>{{post.title}}</h3>
        </div>
        <div class="icons">
            <router-link :to="{ name: 'EditPost', params: { id: post.id }}">
              <span class="material-icons">mode_edit</span>
            </router-link>
            <span class="material-icons" @click="deletePost(post.id)">delete</span>
        </div>
      </div>
      <div v-if="post.showDetails">
        <b> categories: </b>
        <span v-for="category in post.categories" :key="category.id">
          {{category.title}} |
        </span>
        <br>
        <h4>description: {{ post.description }}</h4>
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
    name: 'SinglePost',
    setup(){
      const store = useStore()
      const deletePost = id => store.dispatch('deletePost', id)

      return {
        deletePost
      }
    },
    props: ['post']
}
</script>

<style scoped>
.post {
  margin-top: 20px;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.title, .icons {
  cursor: pointer;
}
.material-icons {
  margin: 15px 10px;
}

</style>