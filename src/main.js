import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faShuffle, faChevronLeft,faMagnifyingGlass, faAngleDown, faBars, faCheck ,faXmark} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faCartShopping, faHeart, faShuffle, faChevronLeft, faMagnifyingGlass, faAngleDown, faBars, faCheck ,faXmark)
const app = createApp(App)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')

