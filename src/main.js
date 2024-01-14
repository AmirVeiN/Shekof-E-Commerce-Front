import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faShuffle, faChevronLeft,faMagnifyingGlass, faAngleDown, faBars, faCheck ,faXmark} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

<<<<<<< HEAD
import axios from "axios"

axios.defaults.baseURL= 'http://127.0.0.1:8000'

library.add(faCartShopping, faHeart, faShuffle, faChevronLeft, faMagnifyingGlass, faAngleDown, faBars)
const app = createApp(App)

app.use(router, axios)
=======
library.add(faCartShopping, faHeart, faShuffle, faChevronLeft, faMagnifyingGlass, faAngleDown, faBars, faCheck ,faXmark)
const app = createApp(App)
app.use(router)
>>>>>>> fc9ea125afb5e0b2a3caed17d536b977c47a45d1
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')

