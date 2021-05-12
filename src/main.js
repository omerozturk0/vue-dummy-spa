import Vue from 'vue'
import VueMask from 'v-mask'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import i18n from './i18n'
import '@/assets/styles/app.scss'
import App from './App.vue'
import vSelect from 'vue-select'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueMask)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('v-select', vSelect)
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
