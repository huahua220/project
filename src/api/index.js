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
