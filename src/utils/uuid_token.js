import { v4 as uuidv4 } from 'uuid';

export const getUUID=()=>{
    let uuid_token=localStorage.getItem('UUIDTOEKN')
    if(!uuid_token){
        uuid_token=uuidv4()
        localStorage.setItem('UUIDTOEKN',uuid_token)
    }
    return uuid_token
}