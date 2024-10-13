import { ILoginRequest } from "../../types/api.types";
import { IAppContextAction, IUserInfo } from "../types/context.types";
import { LoginActionTypes } from "./Login.action.types";

export const LoginReducer = (state:IUserInfo , action:IAppContextAction<LoginActionTypes,IUserInfo>):IUserInfo=>{

    switch (action.type) {
        case LoginActionTypes.LOGIN:
            
            return action.payload!

        default:
            return state;
    }

}