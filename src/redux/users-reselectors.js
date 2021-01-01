import {createSelector} from 'reselect'

export const GetUsersData = (state) => {
    return state.usersPage.users
}
// export const GetUsersDataSelector = createSelector (GetUsersData,(users) => { //SELECTOR EXAMPLE FOR BIG FUNCTIONS
//     return users.filter(u => true)
// }) 
export const GetTotalAmoutUsersData = (state) => {
    return state.usersPage.totalAmoutUsers
}
export const GetAmoutPageUsersData = (state) => {
    return state.usersPage.amoutPageUsers
}
export const GetCurrentPageData = (state) => {
    return state.usersPage.currentPage
}
export const GetIsFetchingData = (state) => {
    return state.usersPage.isFetching
}
export const GetFollowingInProcessData = (state) => {
    return state.usersPage.FollowingInProcess
}