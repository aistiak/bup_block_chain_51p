// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import faker from "vue-faker" 
import VueLoading from 'vuejs-loading-plugin'
import Loader from "./components/Loader"
// overwrite defaults
Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Ladataan', // default 'Loading'
  loading: true, // default false
  customLoader: Loader, // replaces the spinner and text with your own
  background: 'rgb(255,255,255)', // set custom background
  classes: ['myclass'] // array, object or string
})
Vue.config.productionTip = false
Vue.use(faker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
