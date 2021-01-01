import React, { useEffect, useState } from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileStatusWithHook = (props) => {
const [editMode, setEditMode] = useState(false)
const [statusText, setStatusText] = useState(props.statusText)

useEffect(() => {
    setStatusText(props.statusText)
},[props.statusText])

const ActivateEditMode = () => {
    setEditMode(true)
}
const DeactivateEditMode = () => {
    setEditMode(false)
    props.UpdateUserStatus(statusText)
}
const onStatusChange = (e) => {
    setStatusText(e.currentTarget.value)
}
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={ActivateEditMode}>{props.statusText || '---'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={DeactivateEditMode} value={statusText}></input>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook
