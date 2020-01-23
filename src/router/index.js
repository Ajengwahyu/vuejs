import Vue from 'vue'
import VueRouter from 'vue-router'
import Navbar from '../views/layouts/Navbar.vue'
import Sidebar from '../views/layouts/Sidebar.vue'
import Footer from '../views/layouts/Footer.vue'
import Home from '../views/Home.vue'
import DataKantin from '../views/DataKantin.vue'
import DataMakanan from '../views/DataMakanan.vue'
import Pembelian from '../views/Pembelian.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {default: Home, header: Navbar, footer: Footer, sidebar: Sidebar},
  },
  {
    path: '/data_kantin',
    name: 'data_kantin',
    components: {default: DataKantin, header: Navbar, footer: Footer, sidebar: Sidebar}
    },
  {
    path: '/data_makanan',
    name: 'data_makanan',
    components: {default: DataMakanan, header: Navbar, footer: Footer , sidebar: Sidebar}
    },
  {
    path: '/pembelian',
    name: 'pembelian',
    components: {default: Pembelian, header: Navbar, footer: Footer, sidebar: Sidebar}
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
