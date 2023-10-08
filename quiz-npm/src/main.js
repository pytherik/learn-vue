import { createApp } from "vue";
import './assets/main.css'
import App from "./App.vue";
import router from "@/router/index";

const app = createApp(App);
app.use(router);

app.mount("#app");
