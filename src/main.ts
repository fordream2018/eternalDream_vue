import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import BaiduMap from 'vue-baidu-map'
import stockInit from 'highcharts/modules/stock'

//ｉmport element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './ts/worldmap'

stockInit(Highcharts)
/*mapInit(Highcharts)
addWorldMap(Highcharts)*/

Vue.use(HighchartsVue)
Vue.use(BaiduMap,{ak:'aQQnKZuq0WCU3GS52jFpElykzLR1ayH0'})
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
