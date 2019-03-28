import Vue from 'vue'
import App from './App.vue'
//import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//Vue.use(ElementUI);
import { Button, Row } from 'element-ui';
Vue.use(Button)
Vue.use(Row)
import('./test/a.js')
import('./test/b.js')
import('./test/style/element.less')
// import 'element-ui/packages/theme-chalk/src/index.scss';

// import('element-ui')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
