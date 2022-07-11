//对axios二次封装
import axios from "axios";
//引入进度条
import nProgress from "nprogress";
import "nprogress/nprogress.css"
import store from '@/store'
//start:进度条开始 done：进度条结束
// console.log(nProgress)
const requests=axios.create({
    //配置对象
    baseURL:'http://gmall-h5-api.atguigu.cn/api',
    timeout:5000
})

// 请求拦截器：发送请求之前请求拦截器可以检测到，请求发出去之前做一些事情
requests.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //config:配置对象，对象里面有一个属性很重要，headers请求头
    // console.log(store)
    config.headers.userTempId=store.state.detail.uuidToken
    config.headers.token=store.state.register.token
    //进度条开始动
    nProgress.start()
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
requests.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    //进度条结束
    nProgress.done()
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default requests