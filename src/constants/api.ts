type apiURLtype = {
    [t in string] : string
}
export const APIURL:apiURLtype = {
    Login : "/api-v1/auth/signin",
    Signup:"/api-v1/auth/signup",
    CheckLogin:'/api-v1/auth/check-login',
    LogOut:'/api-v1/auth/logout',
    SearchArticles:"/api-v1/articles/search",
    Articles:"/api-v1/articles",
    Like:"/api-v1/articles/like",
    Tage:"/api-v1/articles/tags",
    Plans:"/api-v1/subscription/plans",
    Percheas:"/api-v1/subscription/purchase/",
    pdf:"/api-v1/articles/pdf/",
    forget:"/api-v1/auth/forget-password/",
    reset:"/api-v1/auth/reset-password",
    Static:"/api-v1/statictis"
}