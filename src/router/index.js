import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

//保留一份
let originPush=VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve&&reject){
        originPush.call(this,location,resolve,reject) 
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
}

VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve&&reject){
        originReplace.call(this,location,resolve,reject) 
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
}


export default new VueRouter({
    routes:[
        {
            path:'/shopCart',
            component:ShopCart
        },
        {
            path:'/addcartsuccess',
            component:AddCartSuccess,
            meta:{show:true},
            name:'addcartsuccess'
        },
        {
            path:'/details/:skuId',
            component:Detail
        },
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true},
            name:'search'

        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}

        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}

        },
        {
            path:'/',
            redirect:'/home'
        },
      
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
      },
})