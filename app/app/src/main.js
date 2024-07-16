import { createApp } from 'vue'
import App from './App.vue'
import 'solana-wallets-vue/styles.css'
import './main.css'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(locallizedFormat)
dayjs.extend(relativeTime)

// Routing
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
// create the app.



createApp(App).use(router).mount('#app')
