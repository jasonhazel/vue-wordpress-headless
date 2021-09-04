<template>
  <VApp>
    <VAppBar
      app
      color="primary"
      dark
      flat
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
    
    <VNavigationDrawer permanent app>
      <VListItem v-for="page in pages" :key="page.id">
        <VListItemContent>
          <VListItemTitle>{{ page.title.rendered }}</VListItemTitle>
        </VListItemContent>
      </VListItem>
    </VNavigationDrawer>

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
    this.$store.dispatch('getPages')
  },
  computed: {
  }
};
</script>
