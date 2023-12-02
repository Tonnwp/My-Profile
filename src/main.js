import { createApp } from "vue";
import { MotionPlugin } from '@vueuse/motion'

import App from "./pages/index.vue";
import "./assets/css/index.css";


const app = createApp(App)

app.use(MotionPlugin)

app.mount('#app')
