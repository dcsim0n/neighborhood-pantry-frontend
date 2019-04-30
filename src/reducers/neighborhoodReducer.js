import C from '../constants'
const initialState = {
    all: [],
    selected: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case C.SET_USER_NEIGHBORHOODS :
            return {
                /*this is going to create a bug */
                selected: action.payload[0],
                all:[...action.payload]
            }
        default:
            return state
    }
}