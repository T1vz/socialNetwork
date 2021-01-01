import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sitebarReducer from "./sitebar-reducer"

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message:'Hello world!', likes: 69},
                {id: 2, message:'I love Lila', likes: 228},
                {id: 3, message:'I love React', likes: 34},
                {id: 4, message:'I love JS', likes: 123},
                {id: 4, message:'REDUX THE BEST', likes: 999},
                {id: 5, message:'kek', likes: 1337}
            ],
            newPostText:'Hello World'
        },
        dialogsPage: {
            dialogData: [
                {id: 1, name:'Tima'},
                {id: 2, name:'Lila'},
                {id: 3, name:'Larisa'},
                {id: 4, name:'Alex'}
            ],
            messageData: [
                {id: 1, message:'Heya'},
                {id: 2, message:'qq'},
                {id: 3, message:'Yo'},
                {id: 4, message:'Salute'}
            ],
            newMessageText: ''
        },
        sitebar: {
            friends:[
                {id:1, name:"Tim", ava:"https://sun9-6.userapi.com/c630030/v630030529/b6f9/1Wqw8SKtugE.jpg"},
                {id:2, name:"Lila", ava:"https://i.pinimg.com/originals/97/36/2a/97362a21d987edd05d97b8317143b51e.png"},
                {id:3, name:"Larisa", ava:"https://sun9-41.userapi.com/c4511/u15042996/a_567fb536.jpg?ava=1"}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },
    subscribe(obsrver) {
        this._callSubscriber = obsrver
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sitebar = sitebarReducer(this._state.sitebar, action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store