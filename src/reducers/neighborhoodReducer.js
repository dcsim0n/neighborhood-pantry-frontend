import C from '../constants'
const initialState = {
    all: [],
    selected: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case C.SET_USER_NEIGHBORHOODS :
            return {
                selected: state.selected,
                all: action.payload
            }
        case C.SELECT_NEIGHBORHOOD:
            return {
                selected: action.payload,
                all: state.all
            }
        case C.LOG_IN:
            return {
                all: action.payload.user.neighborhoods,
                selected: action.payload.user.neighborhoods[0]
            }
        case C.LOG_OUT:
            return initialState
        default:
            return state
    }
}