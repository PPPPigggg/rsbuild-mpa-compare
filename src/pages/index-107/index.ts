import { createApp } from "vue"
import App from "./index.vue"
import Vant from "vant"
import "@/assets/main.css"
const app = createApp(App)
app.use(Vant)
app.mount("#app")
