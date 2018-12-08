import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import BaiduMap from 'vue-baidu-map';
import VueAMap from 'vue-amap';
import stockInit from 'highcharts/modules/stock';
import fullscreen from 'vue-fullscreen';
//ｉmport element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './ts/worldmap';
stockInit(Highcharts);
/*mapInit(Highcharts)
addWorldMap(Highcharts)*/
Vue.use(HighchartsVue);
Vue.use(BaiduMap, { ak: 'aQQnKZuq0WCU3GS52jFpElykzLR1ayH0' });
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: '8353f2f5b5efc67181f9d6ab948ebbee',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 高德 sdk 版本，默认为 1.4.4
    v: '1.4.4'
});
Vue.use(ElementUI);
Vue.use(fullscreen);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
