import C from '../constants'

export default (state = [], action) => {
    switch (action.type) {
        case C.SET_USER_NEIGHBORHOODS :
            return [...action.payload]
        default:
            return state
    }
}