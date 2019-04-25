import C from '../constants';

const initialState = {
firstName: null,
    lastName: null,
    email: null,
    id: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case C.LOG_IN:
            console.log("loging in..")
            return state
        case C.LOG_OUT:
            console.log("loggine out..")
            return state
            
        default:
            return state
    }
}