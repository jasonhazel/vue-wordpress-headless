import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  theme: { 
    dark: true,
    themes: {
      light: {
        primary: colors.purple.lighten4,
      },
      dark: {
        primary: colors.purple.darken4
      }
    }
  }
});
