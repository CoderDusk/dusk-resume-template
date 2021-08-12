import {
    createApp
} from 'vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router'

const app = createApp(App).use(router)

app.use(ElementPlus)
app.use(router)


app.mount('#app')

// const app = new Vue({
//     router
// }).$mount('#app')