import { stopSubmit } from "redux-form"
import { usersApi } from "../api/api"
import { GetLogin } from "./auth-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:{
            // state.isAuth = true
            return {...state,initialized: true}
        }
        default:{
            return state
        }
    }
}

export const SetInitializedSuccess = () => ({type:INITIALIZED_SUCCESS})

export const Initialize = () => (dispatch) => {
    let promise = dispatch(GetLogin())
    
    Promise.all([promise]).then(() => {
        dispatch(SetInitializedSuccess())
    })
}

export default appReducer