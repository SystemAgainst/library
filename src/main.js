import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import {router} from "@/router";
import {index} from "./store/index";

createApp(App)
    .use(router)
    .use(index)
    .mount("#app");
