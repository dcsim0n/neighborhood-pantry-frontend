import C from '../constants';

const initialState = {
    token: null,
    firstName: null,
    lastName: null ,
    email: null,
    id: null,
    address:{}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case C.LOG_IN:
            const {first_name, last_name, email, id,address} = action.payload.user
            const newState = {
                token: action.payload.token,
                firstName: first_name,
                lastName: last_name,
                email,
                id,
                address
            }

            return newState
        case C.LOG_OUT:
            console.log("logging out..")
            return initialState
        case C.USER_INFO: {
            const {first_name, last_name, email, id,address} = action.payload
            const newState = {
                token: state.token,
                firstName: first_name,
                lastName: last_name,
                email,
                id,
                address
            }
            return newState
        }
        default:
            return state
    }
}