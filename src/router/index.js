import Vue from 'vue'
import Router from 'vue-router'
import Routes from './routes'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(BootstrapVue)

// Clear after module reload
window.addEventListener('message', e => {
  if (process.env.NODE_ENV !== 'production') {
    console.clear()
    console.log('Log was cleared purposefully to hide previous warnings, errors etc.')
    console.log('to Enable remove console.clear() from router/index.js file.')
  }
})

// console.log("ROUTES",typeof  Routes(), Routes());
export default new Router({
  routes: Routes()
})
