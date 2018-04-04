import Vue from 'vue';
import App from './App';
import router from './router';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import 'lib-flexible/flexible.js';
import './style/css/common.css';
import './icons/iconfont.css';


Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  	el: '#app',
  	router,
  	components: { App },
  	template: '<App/>'
});