import {reqgetCartList,reqChangeChecked,reqdeleteGood} from '@/api'
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
    },

    async ChangeChecked({commit},{skuId,isChecked}){
        // console.log(skuId,isChecked)
        let result=await reqChangeChecked(skuId,isChecked)
        // console.log(result)
        if(result.status==200){
            return 'ok'
        }else{
            return Promise.reject('fail')
        }

    },

    async deleteGood({commit},skuId){
        let result=await reqdeleteGood(skuId)
        // console.log(result)
        if(result.status==200){
            return 'ok'
        }else{
            return Promise.reject('fail')
        }
    },

    delAllCheckedGoods({dispatch,getters}){
        let promiseAll=[]
        getters.cartList.cartInfoList.forEach(element => {
           let promise= element.isChecked==1?dispatch('deleteGood',element.skuId):''
           promiseAll.push(promise)
        });
        return Promise.all(promiseAll)
    },

    allCheckedGoodes({dispatch,getters},isChecked){
        let promiseAll=[]
        // console.log(isChecked)
        getters.cartList.cartInfoList.forEach(element=>{
            let promise=dispatch('ChangeChecked',{skuId:element.skuId,isChecked})
            promiseAll.push(promise)
        })
        return  Promise.all(promiseAll)
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