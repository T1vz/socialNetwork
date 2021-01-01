import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    return(
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'></img>
            {props.isAuth ? <div>{props.login}<button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
        </header>
    )
}

export default Header