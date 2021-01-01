import React from 'react'
import s from './Friends.module.css'
import {NavLink} from 'react-router-dom'

const Friends = (props) => {
    return(
        <div className={s.item}>
            <img src={props.ava}/>
            {props.name}
        </div>
    )
}

export default Friends