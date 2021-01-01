import Axios from "axios"

const instance = Axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers:{"API-KEY": '780a62c7-bcd0-43e8-b977-468180c6ca69'}
    }
)

export const usersApi = {
    GetUsers(currentPage,amoutPageUsers){
        return(
            instance.get(`users?page=${currentPage}&count=${amoutPageUsers}`).then((response) => {return response.data})
        )
    },
    GetLogin(){
        return(
            instance.get(`auth/me`).then((response) => {return response.data})
        )
    },
    Login(email,password,rememberMe){
        return(
            instance.post(`auth/login`, {email, password, rememberMe}).then((response) => {return response.data})
        )
    },
    Logout(){
        return(
            instance.delete(`auth/login`).then((response) => {return response.data})
        )
    },
    FollowUser(id){
        return(
            instance.post(`follow/${id}`).then(response => {return response.data})
        )
    },
    UnfollowUser(id){
        return(
            instance.delete(`follow/${id}`).then(response => {return response.data})
        )
    },
    GetProfile(userid){
        return(
            instance.get(`profile/${userid}`).then(response => {return response.data})
        )
    },
    GetStatus(userid){
        return(
            instance.get(`profile/status/${userid}`).then(response => {return response.data})
        )
    },
    UpdateStatus(status){
        return(
            instance.put(`profile/status/`,{status:status} ).then(response => {return response})
        )
    }

}

