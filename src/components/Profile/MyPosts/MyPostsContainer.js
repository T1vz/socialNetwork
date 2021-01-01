import React from 'react'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return (
        {
            postData: state.profilePage.postData,
            newPostText: state.profilePage.newPostText
        }
    )
}
let mapDispatchToProps = (dispatch) => {
    return (
        {
            addPost: (newPostBody) => {
                dispatch({ type: 'ADD-POST',newPostBody })
            }
        }
    )

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
