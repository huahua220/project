import { reqgetSearchInfo } from "@/api"
//search模块的小仓库
//state:仓库存储数据的地方
const state={
    searchInfo:{}
}
//mutations:唯一修改state的手段
const mutations={
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo=searchInfo
    }
}
//action:处理action，可以书写自己的业务逻辑，也可以处理异步
const actions={
    async getSearchInfo({commit},params={}){
        let result=await reqgetSearchInfo(params)
        // console.log(result)
        if(result.status==200){
            commit('GETSEARCHINFO',result.data.data)
        }
    },
}
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters={
    goodsList(state){
        return state.searchInfo.goodsList||[]
    },

    trademarkList(state){
        return state.searchInfo.trademarkList
    },

    attrsList(state){
        return state.searchInfo.attrsList
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}