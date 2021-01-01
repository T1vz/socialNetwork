import React from 'react'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { AddMessage } from '../../redux/dialogs-reducer'

class DialogsC extends React.Component {
    render(){
        return (<Dialogs dialogsPage={this.props.dialogsPage}
            AddMessage={this.props.AddMessage} />)
    }
}


let mapStateToProps = (state) => {
    return(
        {
            dialogsPage:state.dialogsPage
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return(
        {
            addMessage: (messageBody) => {
                dispatch({type:'ADD-MESSAGE',messageBody})
            }
        }
    )
}



export default compose(connect(mapStateToProps,{AddMessage}),withAuthRedirect)(DialogsC)