import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartShopping, faShuffle, faChevronLeft,faMagnifyingGlass, faAngleDown, faBars, faCheck , faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faYoutube , faTwitter , faPinterest , faLinkedin , faFacebook , faTelegram , faWhatsapp , faInstagram } from '@fortawesome/free-brands-svg-icons'

import axios from "axios"

axios.defaults.baseURL= 'http://127.0.0.1:8000'

library.add(faCartShopping, faHeart, faShuffle, faChevronLeft, faMagnifyingGlass, faAngleDown, faBars , faCheck , faYoutube , faTwitter , faPinterest , faLinkedin , faFacebook , faTelegram , faWhatsapp , faInstagram , faAngleLeft)
const app = createApp(App)

app.use(router, axios)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')

