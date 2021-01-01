import Users from './Users'
import { connect } from 'react-redux'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import { Follow, GetUsers, SetCurrentPage, SetFollowingInProcess, Unfollow } from '../../redux/users-reducer'
import { GetAmoutPageUsersData, GetCurrentPageData, GetFollowingInProcessData, GetIsFetchingData, GetTotalAmoutUsersData, GetUsersData } from '../../redux/users-reselectors'

class UsersContainerC extends React.Component {
    componentDidMount() {
        this.props.GetUsers(this.props.currentPage, this.props.amoutPageUsers)
    }

    onPageChange(p) {
        this.props.SetCurrentPage(p)
        this.props.GetUsers(p, this.props.amoutPageUsers)
    }
    render(){
        return( 
        <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users Unfollow={this.props.Unfollow}
                      onPageChange={this.onPageChange.bind(this)} 
                      Follow={this.props.Follow} 
                      totalAmoutUsers={this.props.totalAmoutUsers} 
                      amoutPageUsers={this.props.amoutPageUsers} 
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      isFetching={this.props.isFetching}
                      SetFollowingInProcess={this.props.SetFollowingInProcess}
                      FollowingInProcess={this.props.FollowingInProcess}
        />
        </>
        )
    }
}

let mapStateToProps = (state) => {
    return(
        {
            users: GetUsersData(state),
            totalAmoutUsers: GetTotalAmoutUsersData(state),
            amoutPageUsers: GetAmoutPageUsersData(state),
            currentPage: GetCurrentPageData(state),
            isFetching: GetIsFetchingData(state),
            FollowingInProcess: GetFollowingInProcessData(state)
        }
    )
}

// let mapDispatchToprops = (dispatch) => {
//     return(
//         {
//             Follow: (userid) => {
//                 dispatch(Follow(userid))
//             },
//             Unfollow: (userid) => {
//                 dispatch(Unfollow(userid))
//             },
//             SetCurrentPage: (currentPage) => {
//                 dispatch(SetCurrentPage(currentPage))
//             },
//             SetTotalAmoutUsers: (totalAmoutUsers) => {
//                 dispatch(SetTotalAmoutUsers(totalAmoutUsers))
//             },
//             SetUsers: (users) => {
//                 dispatch(SetUsers(users))
//             },
//             SetFollowingInProcess: (status,userid) => {
//                 dispatch(SetFollowingInProcess(status,userid))
//             },
//             SetFetching: (status) => {
//                 dispatch(SetFetching(status))
//             }
//         }
//     )
// }

const UsersContainer = connect(mapStateToProps, {Follow,Unfollow,SetCurrentPage,GetUsers,SetFollowingInProcess})(UsersContainerC)

export default UsersContainer