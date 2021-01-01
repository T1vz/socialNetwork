import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/FormsCotrols/FormsControls'
import { maxLengthCreator, requiredField } from '../../utils/validators/validators'

const maxLength100 = maxLengthCreator(100)

const Dialogs = (props) => {

    let AddNewDialogText = (formData) => {
        props.AddMessage(formData.messageBody)
    }

    let dialogsElements = props.dialogsPage.dialogData
    .map(obj => <DialogItem id={obj.id} name={obj.name}></DialogItem>)

    let messageElements = props.dialogsPage.messageData
    .map(obj => <Message id={obj.id} message={obj.message}></Message>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage()
    }

    let updateNewText = () => {
        props.updateNewText(newMessageElement.current.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <DialogsAddMessageReduxForm onSubmit={AddNewDialogText}/>
            </div>
        </div>
    )
}

const DialogsAddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[requiredField,maxLength100]} name='messageBody' component={Textarea} placeholder='Enter your message'/></div>
            <div><button>Send message</button></div>
        </form>
    )
    }

const DialogsAddMessageReduxForm = reduxForm({
    form:'dialogs'
})(DialogsAddMessageForm)



export default Dialogs