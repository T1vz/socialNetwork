import Axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { GetLogin, logout } from '../../redux/auth-reducer'
import Header from './Header'
import s from './Header.module.css'

class HeaderC extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToprops = (state) => ({
    isAuth:state.auth.isAuth,
    login:state.auth.login
})

export default connect(mapStateToprops,{GetLogin,logout})(HeaderC)