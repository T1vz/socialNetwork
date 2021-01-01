import { stopSubmit } from "redux-form"
import { usersApi } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const SET_FETCHING = 'SET_FETCHING'

let initialState = {
    login:null,
    email:null,
    id:null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:{
            // state.isAuth = true
            return {...state,...action.data}
        }
        default:{
            return state
        }
    }
}

export const SetUserData = (data) => ({type:SET_USER_DATA,data})

export const GetLogin = () => (dispatch) => {
        return usersApi.GetLogin().then(data => {
            if (data.resultCode === 0){
                let {id, login, email} = data.data
                dispatch(SetUserData({id,login,email,isAuth:true}))
            }
        })
    
}
export const login = (email,password,rememberMe = false) => (dispatch) => {
        usersApi.Login(email,password,rememberMe).then(data => {
            if (data.resultCode === 0){
                dispatch(GetLogin())
            } else {
                let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error'
                dispatch(stopSubmit('login',{_error: errorMessage}))
            }
        })
}
export const logout = () => (dispatch) => {
        usersApi.Logout().then(data => {
            if (data.resultCode === 0){
                dispatch(SetUserData({login:null,
                    email:null,
                    id:null,
                    isAuth:false
                }))
            }
        })
}

export default authReducer