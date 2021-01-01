import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../utils/validators/validators'
import { Input } from '../common/FormsCotrols/FormsControls'
import authReducer, { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom'
import styles from '../common/FormsCotrols/FormsControls.module.css'

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[requiredField]} placeholder='Email' name='email' component={Input}/>
            </div>
            <div>
                <Field validate={[requiredField]} type='password' placeholder='Password' name='password' component={Input}/>
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component={Input}/>Remember me
            </div>
                {props.error && <div className={styles.formTotalError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm ({
    form:'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        isAuth:state.auth.isAuth
    })
}

export default connect(mapStateToProps,{login})(Login)