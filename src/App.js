import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import { Route, BrowserRouter, withRouter } from 'react-router-dom'
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import Users from './components/Users/Users'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { GetLogin } from './redux/auth-reducer'
import { Initialize } from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'

class App extends React.Component {
  componentDidMount(){
    this.props.Initialize()
  }
  render() {
    if(!this.props.initialized) {
      return <Preloader></Preloader>
    }
    return (
        <div className='app-wrapper'>
          <HeaderContainer></HeaderContainer>
          <Navbar ></Navbar>
          <div className='app-wrapper-content'>
            <Route path='/profile/:userid?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized:state.app.initialized
})

export default compose(withRouter,connect(mapStateToProps,{Initialize}))(App);