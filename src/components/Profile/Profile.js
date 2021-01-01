import React from 'react'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile =(props) => {
        return (
            <div>
                <ProfileInfo profile={props.profile} statusText={props.statusText} UpdateUserStatus={props.UpdateUserStatus} ></ProfileInfo>
                <MyPostsContainer />
            </div>
        )
}

export default Profile
