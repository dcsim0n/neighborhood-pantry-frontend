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
        default:
            return state
    }
}