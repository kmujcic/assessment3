import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ElectricianPage from '../views/ElectricianPage.vue'
import PlumberPage from '../views/PlumberPage.vue'
import BuilderPage from '../views/BuilderPage.vue'
import CarpenterPage from '../views/CarpenterPage.vue'
import PainterPage from '../views/PainterPage.vue'
import BricklayerPage from '../views/BricklayerPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/electrician',
    name: 'electrician',
    component: ElectricianPage
  },
  {
    path: '/plumber',
    name: 'plumber',
    component: PlumberPage
  },
  {
    path: '/builder',
    name: 'builder',
    component: BuilderPage
  },
  {
    path: '/carpenter',
    name: 'carpenter',
    component: CarpenterPage
  },
  {
    path: '/painter',
    name: 'painter',
    component: PainterPage
  },
  {
    path: '/bricklayer',
    name: 'bricklayer',
    component: BricklayerPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
