import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//加载全局样式
import '@/style/index.less'

//导入bootstrap
import 'bootstrap/dist/css/bootstrap.css'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')