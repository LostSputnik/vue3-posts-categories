import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    categories: [],
    keyPost: 0,
    keyCategory: 0
  },
  getters: {
    allPosts: state => state.posts,
    allCategories: state => state.categories,
    postById: (state) => (id) => {
      return state.posts.find(el => el.id == id)
    }
  },
  mutations: {
    newCategory: (state, category) => state.categories.unshift(category),
    deleteCategory: (state, id) => {
        const index = state.categories.findIndex(el => el.id == id)
        state.categories.splice(index, 1)
    },
    updateCategory: (state, category) => {
        const index = state.categories.findIndex(el => el.id == category.id)
        state.categories.splice(index, 1, category)
    },
    newPost: (state, post) => state.posts.unshift(post),
    deletePost: (state, id) => {
        const index = state.posts.findIndex(el => el.id == id)
        state.posts.splice(index, 1);
    },
    updatePost: (state, post) => {
        const index = state.posts.findIndex(el => el.id == post.id)
        state.posts.splice(index, 1, post)
    }

  },
  actions: {
    addCategory({ state, commit }, category){
        category.id = state.keyCategory
        state.keyCategory++
        commit('newCategory', category)
    },
    deleteCategory({ commit }, id){
        commit('deleteCategory', id)
    },
    updateCategory({ commit }, category){
        commit('updateCategory', category)
    },
    addPost({ state, commit }, post){
        post.id = state.keyPost
        state.keyPost++
        commit('newPost', post)
    },
    deletePost({ commit }, id){
        commit('deletePost', id)
    },
    updatePost({ commit }, post){
        commit('updatePost', post)
    }
  },
  modules: {
    // data
  }
})
