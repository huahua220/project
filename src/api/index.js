//当前这个模块：api进行统一管理
import requests from "./request";
import mockRequest from './mockRequest'

//三级联动接口,axios发送请求返回promise对象
export const reqCategoryList=()=>{
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}

//获取banner（Homes首页轮播图的接口）
export const reqGetBannerList=()=>{
    return mockRequest({url:'/banner'})
}

//获取floor
export const reqGetFloorList=()=>{
    return mockRequest({url:'/floor'})
}

//搜索商品
export const reqgetSearchInfo=(params)=>{
    return requests({url:'/list',method:'post',data:params})
}

//获取商品详情 detail
export const reqgetItemInfo=(skuId)=>{
    return requests({url:`/item/${skuId}`,method:'get'})
}

//加入购物车
export const reqaddOrUpdateShopCart=(skuId,skuNum)=>{
    return requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
}

//获取购物车信息
export const reqgetCartList=()=>{
    return requests({url:'/cart/cartList',method:'get'})
}