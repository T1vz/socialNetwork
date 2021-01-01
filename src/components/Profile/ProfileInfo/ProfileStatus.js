import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        statusChanging:false,
        statusText:this.props.statusText
    }
    ActivateEditMode(){
        this.setState({
            statusChanging:true
        })
    }
    onStatusChange(e){
        this.setState({
            statusText: e.currentTarget.value
        })
    }
    DeactivateEditMode(){
        this.setState({
            statusChanging:false
        })
        this.props.UpdateUserStatus(this.state.statusText)
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.statusText != prevProps.statusText){
            this.setState({
                statusText: this.props.statusText
            })
        }
    }
    render(){
        return(
            <div>
                {!this.state.statusChanging && 
                <div>
                    <span onDoubleClick={this.ActivateEditMode.bind(this)}>{this.props.statusText || '---'}</span>
                </div>
                }
                {this.state.statusChanging && 
                <div>
                    <input onChange={this.onStatusChange.bind(this)} autoFocus={true} onBlur={this.DeactivateEditMode.bind(this)} value={this.state.statusText}></input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus
