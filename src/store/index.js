import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import cartList from './cartList'
import register  from './register'


//对外暴露Store类的一个实力
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        cartList,
        register
    }
})