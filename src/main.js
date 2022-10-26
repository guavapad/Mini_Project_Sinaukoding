import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from 'vue-sweetalert2'
import VueClock from '@dangvanthanh/vue-clock'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faUser, faCircleUser, faRightToBracket, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faUser, faCircleUser, faRightToBracket, faRightFromBracket)


const app = createApp(App)

app.use(router)
app.use(VueSweetalert2)
app.use(VueClock)

app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)
