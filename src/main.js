import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faHeart, faShuffle, faChevronLeft, faMagnifyingGlass, faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'

import axios from "axios"

axios.defaults.baseURL= 'http://127.0.0.1:8000'

library.add(faCartShopping, faHeart, faShuffle, faChevronLeft, faMagnifyingGlass, faAngleDown, faBars)
const app = createApp(App)

app.use(router, axios)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')

