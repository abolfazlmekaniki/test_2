export interface ILoginRequest{
    username:string,
    password:string
} 

export interface ILoginResponse{
    status:number,
    message:string,
    data:{
        username:string,
        id:number,
        token:string
    }
}
    