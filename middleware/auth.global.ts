export default defineNuxtRouteMiddleware(async(to, from) => {
    const token = useCookie('token')
    
    if(token.value != null){
        if(to.path == "/login" || to.path == "/register"){
            return navigateTo("/")
        }
        if(to.path == "/ar/login" || to.path == "/ar/register"){
            return navigateTo("/")
        }
    }
})
