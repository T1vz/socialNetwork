import { usersApi } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_AMOUT_USERS = 'SET_TOTAL_AMOUT_USERS'
const SET_FETCHING = 'SET_FETCHING'
const SET_FOLLOWING_IN_PROCESS = 'SET_FOLLOWING_IN_PROCESS'

let initialState = {
    users: [
    ],
    currentPage: 1,
    totalAmoutUsers: 0,
    amoutPageUsers: 5,
    isFetching: false,
    FollowingInProcess: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            let stateCopy = { ...state, users: action.users }
            return stateCopy
        }
        case SET_CURRENT_PAGE: {
            let stateCopy = { ...state }
            stateCopy.currentPage = action.currentPage
            return stateCopy
        }
        case SET_TOTAL_AMOUT_USERS: {
            let stateCopy = { ...state }
            stateCopy.totalAmoutUsers = action.totalAmoutUsers
            return stateCopy
        }
        case SET_FETCHING: {
            let stateCopy = { ...state }
            stateCopy.isFetching = action.status
            return stateCopy
        }
        case SET_FOLLOWING_IN_PROCESS: {
            return { ...state, FollowingInProcess: action.status ? [...state.FollowingInProcess, action.userid] : state.FollowingInProcess.filter(u => u != action.userid) }
        }
        default: {
            return state
        }
    }
}

export const FollowSucces = (userid) => ({ type: FOLLOW, userid })
export const UnfollowSucces = (userid) => ({ type: UNFOLLOW, userid })
export const SetUsers = (users) => ({ type: SET_USERS, users })
export const SetCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const SetTotalAmoutUsers = (totalAmoutUsers) => ({ type: SET_TOTAL_AMOUT_USERS, totalAmoutUsers })
export const SetFetching = (status) => ({ type: SET_FETCHING, status })
export const SetFollowingInProcess = (status, userid) => ({ type: SET_FOLLOWING_IN_PROCESS, status, userid })

export const GetUsers = (currentPage, amoutPageUsers) => {
    return (dispatch) => {
        dispatch(SetFetching(true))
        usersApi.GetUsers(currentPage, amoutPageUsers).then(data => {
            dispatch(SetUsers(data.items))
            dispatch(SetTotalAmoutUsers(data.totalCount))
            dispatch(SetFetching(false))
        })
    }
}
export const Unfollow = (userid) => {
    return (dispatch) => {
        dispatch(SetFollowingInProcess(true, userid))
        usersApi.UnfollowUser(userid).then(data => {
            if (data.resultCode === 0) {
                dispatch(UnfollowSucces(userid))
            }
            dispatch(SetFollowingInProcess(false, userid))
        })
    }
}
export const Follow = (userid) => {
    return (dispatch) => {
        dispatch(SetFollowingInProcess(true, userid))
        usersApi.FollowUser(userid).then(data => {
            if (data.resultCode === 0) {
                dispatch(FollowSucces(userid))
            }
            dispatch(SetFollowingInProcess(false, userid))
        })
    }
}

export default usersReducer