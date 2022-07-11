import {reqgetYZM,reqgetUserRegister,reqUserLogin,reqgetUserInfo} from '@/api'
const state={
    yzm:'',
    token:localStorage.getItem('token'),
    userInfo:{}
}
const mutations={
    GETYZM(state,yzm){
        state.yzm=yzm
    },

    USERLOGIN(state,token){
        state.token=token
    },

    GETUSERINFO(state,userInfo){
        state.userInfo=userInfo
    }
}
const actions={
    async getYZM({commit},phone){
        // console.log(phone)
        let result=await reqgetYZM(phone)
        // console.log(result)
        if(result.status==200){
            commit('GETYZM',result.data.data)
            return 'ok'
        }else{
            Promise.reject('fail')
        }
    },

    async userRegister({commit},data){
        // console.log(data)
      let result=  await  reqgetUserRegister(data)
    //   console.log(result)
      if(result.data.code==200){
        return 'ok'
      }else if(result.data.code==223){
        return Promise.reject('手机号已注册')
      }else{
        return Promise.reject('注册失败')
      }
      
    },

    async userLogin({commit},data){
        // console.log(data)
       let result=await reqUserLogin(data)
    //    console.log(result)
       if(result.data.code==200){
        commit('USERLOGIN',result.data.data.token)
        localStorage.setItem('token',result.data.data.token)
        return '登录成功'
       }else{
        return Promise.reject('登录失败')
       }
    },

    async getUserInfo({commit}){
     let result=  await reqgetUserInfo()
    //  console.log(result)
     if(result.data.code==200){
        commit('GETUSERINFO',result.data.data)
        return 'ok'
     }

    }
}
const getters={

}

export default{
    state,
    mutations,
    actions,
    getters
}