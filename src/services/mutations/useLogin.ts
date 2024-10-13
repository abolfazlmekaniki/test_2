import { useMutation } from "react-query"
import { Axios } from "../../config/axios"
import { APIURL } from "../../constants/api"
import {ILoginRequest, ILoginResponse} from "../../types/api.types";

const fetcher  = (data:ILoginRequest):Promise<ILoginResponse>=>Axios.post(APIURL.SuccessLogin,data,{headers:{'content-type':'application/x-www-form-urlencoded'}}).then(res=>res.data);

export const useSuccessLogin = ()=>{    
    return useMutation<ILoginResponse,any,ILoginRequest,any>({
        mutationFn:fetcher
    })
}