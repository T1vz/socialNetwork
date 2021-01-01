import Axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhoto from './../../assets/user.png'
import { NavLink } from 'react-router-dom'
import { usersApi } from '../../api/api'

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalAmoutUsers / props.amoutPageUsers)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.content}>
            {pages.map((p) => {
                return <span className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChange(p) }}
                >{p}</span>
            })}
            {
                props.users.map((u) => {
                    return (<div key={u.id}>
                        <span>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                            </NavLink>
                            <div>
                                {u.followed ? <button disabled={props.FollowingInProcess.some(a => a==u.id)} onClick={() => {
                                    props.Unfollow(u.id)
                                }}>Unfollow</button> : <button disabled={props.FollowingInProcess.some(a => a==u.id)} onClick={() => {
                                    props.Follow(u.id)
                                }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>Status:{u.status}</div>
                            </span>
                            <span>
                                <div>{}</div>
                                <div>{}</div>
                            </span>
                        </span>
                    </div>
                    )
                })
            }
        </div>
    )
}
export default Users