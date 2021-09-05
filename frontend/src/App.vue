<template>
  <VApp>
    <VAppBar app flat color='primary'>
      <VBtn icon v-on:click='sidenav = !sidenav'>
        <VIcon>mdi-menu</VIcon>
      </VBtn>
      <VAppBarTitle>VueJS Headless Wordpress</VAppBarTitle>
      
      <VSpacer />
      <VTooltip left>
        <template v-slot:activator="{ on, attrs }">
          <VBtn :href="WORDPRESS_ADMIN" target="_blank" icon v-bind="attrs" v-on="on">
            <VIcon>mdi-wordpress</VIcon>
          </VBtn>
        </template>
        Open WordPress Admin
      </VTooltip>
    </VAppBar>
    
    <VNavigationDrawer app v-model='sidenav'>
      <VListItem v-for="page in pages" :key="page.id">
        <VListItemContent>
          <VListItemTitle>{{ page.title.rendered }}</VListItemTitle>
        </VListItemContent>
      </VListItem>
    </VNavigationDrawer>

    <VMain>
      <VContainer fluid>
        <VRow>
          <VCol cols='12' md='6' v-for='post in posts' :key='post.id'>
            <VCard outlined tile flat>
              <VCardTitle>{{ post.title.rendered }}</VCardTitle>
              <VCardText v-html="post.content.rendered" />
            </VCard>
          </VCol>
        </VRow>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>

export default {
  name: 'App',
  components: { },
  data: () => ({
    sidenav: false
  }),
  mounted() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getPages')
  },
  computed: {
  }
};
</script>
