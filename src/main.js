import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { 
  NavBar,
  Progress,
  RadioGroup, 
  Radio,
  Button,
  Icon,
  Toast
} from 'vant'
import 'vant/lib/index.css'
import './style.css'
import App from './App.vue'
import Questionnaire from './components/Questionnaire.vue'
import ResultPage from './components/ResultPage.vue'

const app = createApp(App)

const routes = [
  { path: '/', component: Questionnaire },
  { path: '/result', component: ResultPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  base: '/everythingwillbeok',
  routes,
})

app.use(NavBar)
.use(router)
   .use(Progress)
   .use(RadioGroup)
   .use(Radio)
   .use(Button)
   .use(Icon)
   .use(Toast)

app.mount('#app')