import C from '../constants';

const initialState = {
    /* This isn't a good way to do this */
    token: localStorage.getItem("token"),
    firstName: null,
    lastName: null ,
    email: null,
    id: localStorage.getItem("id"),
    
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
            // Not a good way to do this, fix it later
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("id", id)

            return newState
        case C.LOG_OUT:
            console.log("logging out..")
            localStorage.clear()
            return state
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