import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import inViewportDirective from 'vue-in-viewport-directive'

Vue.config.productionTip = false
Vue.use(vueSmoothScroll)
Vue.directive('in-viewport', inViewportDirective)

new Vue({
  render: h => h(App),
}).$mount('#app')
