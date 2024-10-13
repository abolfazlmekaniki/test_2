import { ILoginRequest } from "../../types/api.types";

export interface IUserInfo {
    id:number ,
    username:string
}

export interface IAppContextState {
   User:IUserInfo
}


export interface IAppContextAction<T,K>{
    type:T,
    payload?:K
}

export interface IAppContext{
    state:IAppContextState,
    dispatch:any
}
