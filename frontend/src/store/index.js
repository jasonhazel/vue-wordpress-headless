import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/wp-json/wp/v2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    pages: [],
  },
  mutations: {
    SET_POSTS(state, posts) {
      Vue.set(state, 'posts', posts)
    },
    SET_PAGES(state, pages) {
      Vue.set(state, 'pages', pages)
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get('posts')
        .then(response => {
          commit('SET_POSTS', response.data)
        })
    },
    getPages({ commit }) {
      axios.get('pages')
        .then(response => {
          commit('SET_PAGES', response.data)
        })
    }
  },
  getters: {
    posts: (state) => {
      return state.posts
    },
    post: (state) => (id) => {
      return state.posts.find(post => post.id === id)
    }, 
    pages: (state) => {
      return state.pages
    }
  }
})
