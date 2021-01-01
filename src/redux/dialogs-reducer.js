const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:{
            let newMessage = {
                id: 6,
                message: action.messageBody,
            }
            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(newMessage)
            return stateCopy
        }
        default:{
            return state
        }
    }
}
export const AddMessage = (messageBody) => ({type:ADD_MESSAGE,messageBody})

export default dialogsReducer