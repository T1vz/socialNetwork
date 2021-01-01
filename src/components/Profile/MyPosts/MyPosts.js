import React from 'react'
import { Field, reduxForm } from 'redux-form'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {maxLengthCreator, requiredField} from '../../../utils/validators/validators'
import { Textarea } from '../../common/FormsCotrols/FormsControls'

const maxLength300 = maxLengthCreator(300)

const MyPosts = (props) => {
    let postElements = props.postData
        .map(obj => <Post id={obj.id} message={obj.message} likes={obj.likes}></Post>)

    let newPostElement = React.createRef()

    let addNewPost = (data) => {
        props.addPost(data.newPostBody)
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <MyPostCreaterReduxForm onSubmit={addNewPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

const MyPostCreaterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostBody' placeholder='New Post' validate={[requiredField, maxLength300 ]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const MyPostCreaterReduxForm = reduxForm({
    form:'myPostForm'
})(MyPostCreaterForm)

export default MyPosts
