import { createApp } from "vue";
import App from "./App.vue";
import mitt from "mitt";
const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.isMobile = window.innerWidth <= 767;

app.mount("#app");
