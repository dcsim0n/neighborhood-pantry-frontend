import C from '../constants';

const initialState = {
    /* This isn't a good way to do this */
    token: null,
    firstName: null,
    lastName: null ,
    email: null,
    id: null,
    
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
            console.log("logging out..")
            return {
                token: null,
                firstName: null,
                lastName: null ,
                email: null,
                id: null
            }
        case C.USER_INFO: {
            const {first_name, last_name, email, id} = action.payload
            const newState = {
                token: state.token,
                firstName: first_name,
                lastName: last_name,
                email,
                id
            }
            return newState
        }
        default:
            return state
    }
}