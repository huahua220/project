import {reqgetItemInfo,reqaddOrUpdateShopCart} from '@/api'
import {getUUID} from '@/utils/uuid_token'

const state={
    itemInfo:{},
    uuidToken:getUUID()
}

const mutations={
    GETITEMINFO(state,itemInfo){
        state.itemInfo=itemInfo
    }
}

const actions={
    async getItemInfo({commit},skuId){
        let result=await reqgetItemInfo(skuId)
        // console.log(result)
        if(result.status==200){
            commit('GETITEMINFO',result.data.data)
        }
    },

    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result=await reqaddOrUpdateShopCart(skuId,skuNum)
            // console.log(result )
            if(result.status==200){
                // console.log(1)
                return 'ok'
            }else{
                return Promise.reject(new Error('faile'))
            }
        
    }
}

const getters={
    categoryView(state){
        return state.itemInfo.categoryView||{}
    },
    skuInfo(state){
        return state.itemInfo.skuInfo||{}
    },
    spuSaleAttrList(state){
        return state.itemInfo.spuSaleAttrList||[]
    }
}

export default{
    state,
    mutations,
    actions,
    getters

}