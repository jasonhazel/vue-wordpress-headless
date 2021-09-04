import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import constants from './plugins/constants'

Vue.config.productionTip = false

Vue.use(constants)

Vue.mixin({
  data: () => ({
    WORDPRESS_ADMIN:  'http://localhost:8000/wp-admin',
  }),
  computed: {
    posts() {
      return this.$store.getters.posts
    },
    pages() {
      return this.$store.getters.pages
    }
  }
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
