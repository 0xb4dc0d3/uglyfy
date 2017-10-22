import Vue from 'vue'

//Register BootstrapVue plugin in the app entry point
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'

//Import styles (needs style-loader)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
