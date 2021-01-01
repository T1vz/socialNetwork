import { usersApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postData: [
        {id: 1, message:'Hello world!', likes: 69},
        {id: 2, message:'I love Lila', likes: 228},
        {id: 3, message:'I love React', likes: 34},
        {id: 4, message:'I love JS', likes: 123},
        {id: 4, message:'REDUX THE BEST', likes: 999},
        {id: 5, message:'kek', likes: 1337}
    ],
    profile: null,
    statusText:''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 6,
                message: action.newPostBody,
                likes: 0
            }
            let stateCopy = {...state}
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case SET_USER_PROFILE:{
            let stateCopy = {...state}
            stateCopy.profile = action.profile
            return stateCopy
        }
        case SET_STATUS:{
            let stateCopy = {...state}
            stateCopy.statusText = action.status
            return stateCopy
        }
        default:{
            return state
        }
    }
}

export const SetUserProfile = (profile) => ({type:SET_USER_PROFILE,profile})
export const SetUserStatus = (status) => ({type:SET_STATUS,status})


export const GetStatus = (userid) => {
    return ((dispatch) => {
        usersApi.GetStatus(userid).then(data => {
            dispatch(SetUserStatus(data))
        })
    })
}
export const UpdateUserStatus = (statusText) => {
    return ((dispatch) => {
        usersApi.UpdateStatus(statusText).then(response => {
            if (response.data.resultCode === 0){
                dispatch(SetUserStatus(statusText))
            }
        })
    })
}

export const GetUserProfile = (userid) => {
    return ((dispatch) => {
        usersApi.GetProfile(userid).then(data => {
            dispatch(SetUserProfile(data))
        })
    })
}

export default profileReducer