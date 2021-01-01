import React from 'react'
import s from './Profile.module.css'
import Profile from './Profile'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import { GetUserProfile,GetStatus,UpdateUserStatus } from '../../redux/profile-reducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileC extends React.Component {
    componentDidMount() {
        let userid = this.props.match.params.userid 
        if (!userid) {
            userid = this.props.activeUserId
            if (!userid){
                this.props.history.push('/login')
            }
        }
        
        // setTimeout(()=>{
        //     this.props.GetUserProfile(userid)
        // },1000)
        this.props.GetUserProfile(userid)
        this.props.GetStatus(userid)
    }
    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return(
        {
            profile:state.profilePage.profile,
            activeUserId:state.auth.id,
            statusText:state.profilePage.statusText
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return(
        {
            SetUserProfile:(profile) => {
                dispatch({type:'SET_USER_PROFILE',profile})
            }
        }
    )
}


const ProfileContainer = compose(connect(mapStateToProps, {GetUserProfile, GetStatus, UpdateUserStatus}),withRouter)(ProfileC)
export default ProfileContainer
