import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import ContactUs from '../views/ContactUs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
