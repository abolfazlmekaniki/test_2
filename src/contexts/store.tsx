import React, { createContext, useReducer } from "react";
import { IAppContext, IAppContextAction, IAppContextState } from "./types/context.types";
import { LoginReducer } from "./Login/Login.reducer";

const initialState:IAppContextState = {
    User:{id:0,username:""}
}

const thunkMiddleware = (dispatch:any)=>(action:any)=>{
    if(typeof action=="function"){
        return action(dispatch)
    }
    return dispatch(action);
}

const combinedReducer = ({User}:IAppContextState,action:IAppContextAction<any,any>)=>({
    User:LoginReducer(User,action)
})

export const AppContext = createContext<IAppContext>({
    state:initialState,
    dispatch:()=>null
});


interface IAppContextProviderProps extends React.PropsWithChildren{}
export const AppContextProvider:React.FC<IAppContextProviderProps>=({children}):JSX.Element=>{
    const [state , dispatch] = useReducer(combinedReducer,initialState);
    const dispatchwithMiddleware = thunkMiddleware(dispatch)
    return (
        <AppContext.Provider value={{state,dispatch:dispatchwithMiddleware}}>
            {children}
        </AppContext.Provider>
    )
}