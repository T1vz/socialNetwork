import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img 
            src='https://i.pinimg.com/originals/97/36/2a/97362a21d987edd05d97b8317143b51e.png'
            />
            {props.message}
            <div>
                <span>{props.likes} Like</span>
            </div>
        </div>
    )
}

export default Post
