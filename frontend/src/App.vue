<template>
  <VApp>
    <VAppBar
      app
      color="primary"
      dark
    >
      <VAppBarTitle>VueJS Headless Wordpress</VAppBarTitle>
      
      <VSpacer />

      <VBtn
        :href="WORDPRESS_ADMIN"
        target="_blank"
        text
      >
        ADMIN
      </VBtn>
    </VAppBar>

    <VMain>
      <VContainer fluid>
        <VCard v-for='post in posts' :key='post.id'>
          <VCardTitle>{{ post.title.rendered }}</VCardTitle>
          <VCardText v-html="post.content.rendered" />
        </VCard>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch('getPosts')
  },
  computed: {
  }
};
</script>
