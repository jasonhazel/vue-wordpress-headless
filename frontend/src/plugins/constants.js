export default {
  install(Vue) {
    Vue.Constants = {
      WORDPRESS_ADMIN: 'http://localhost:8000/wp-admin',
      WORDPRESS_API: 'http://localhost:8000/wp-json/wp/v2'
    }
  }

}