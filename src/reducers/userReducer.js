import C from '../constants';

const initialState = {
    token: "",
    firstName: null,
    lastName: null,
    email: null,
    id: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case C.LOG_IN:
            const {first_name, last_name, email, id} = action.payload.user
            const newState = {
                token: action.payload.token,
                firstName: first_name,
                lastName: last_name,
                email,
                id
            }
            return newState
        case C.LOG_OUT:
            console.log("loggine out..")
            return state
            
        default:
            return state
    }
}