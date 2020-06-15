import Vue from 'vue'
import App from './App.vue'
import index from './components/index.vue'
import loja from './components/loja.vue'

Vue.config.productionTip = false
Vue.prototype.$appName = 'App.vue'
Vue.component('index', index);
Vue.component('loja', loja);

new Vue({
  render: h => h(App),
}).$mount('#app')
