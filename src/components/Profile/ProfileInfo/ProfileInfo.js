import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHook from './ProfileStatusWithHook'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile ? props.profile.photos.large : null}></img>
                <ProfileStatusWithHook statusText={props.statusText} UpdateUserStatus={props.UpdateUserStatus} />
                <div>
                    name:{props.profile.fullName}
                </div>
                <div>
                    info:{props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
