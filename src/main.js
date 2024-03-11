import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/routes";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App);

app
  .use(router)
  .use(vuetify)
  .use(mdiVue, {
    icons: mdijs,
  })
  .mount("#app");
