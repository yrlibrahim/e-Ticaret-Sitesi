import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Header from "./Fixed/Header.vue";

const app = createApp(App);

app.component("app-header", Header);
app.use(createPinia());
app.use(router);

app.mount("#app");
