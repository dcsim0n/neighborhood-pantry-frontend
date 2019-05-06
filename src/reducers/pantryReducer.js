import C from '../constants';
const initialState = {
    items:[],
    requests:[] 
}
export default (state = initialState, action) => {
    switch (action.type) {
        case C.UPDATE_ITEMS:
            return {
                items: action.payload,
                requests: state.requests
            }
        case C.UPDATE_REQUESTS:
            return {
                requests: action.payload,
                items: state.items
            }
        default:
            return state
    }
}