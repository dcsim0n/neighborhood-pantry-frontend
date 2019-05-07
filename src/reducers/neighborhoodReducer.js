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
            const {neighborhoods} = action.payload.user
            let selected
            if(neighborhoods.length > 0){
                selected = neighborhoods[neighborhoods.length-1]
            }else{
                selected = null
            }
            return {
                all: neighborhoods,
                selected: selected
            }
        case C.LOG_OUT:
            return initialState
        default:
            return state
    }
}