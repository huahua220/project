import {reqgetCartList} from '@/api'
const state={
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList
    }
}
const actions={
    async getCartList({commit}){
        let result=await reqgetCartList()
        // console.log(result)
        if(result.status==200){
            commit('GETCARTLIST',result.data.data)
        }
    }
}
const getters={
    cartList(state){
        // console.log(state)
        return state.cartList[0]||{}
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}