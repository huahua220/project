import Vue from 'vue'
import App from './App.vue'
//引入仓库
import store from './store'
import router from '@/router'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// import {reqCategoryList} from '@/api'
// reqCategoryList()
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
//引入mock
import '@/mock/mockServer'

import 'swiper/css/swiper.css'
// import {reqgetSearchInfo} from '@/api'
// reqgetSearchInfo()

Vue.config.productionTip = false

new Vue({ 
  render: h => h(App),
  //全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router,
  //注册仓库：组件实例身上会出现一个属性$store属性
  store
}).$mount('#app')
