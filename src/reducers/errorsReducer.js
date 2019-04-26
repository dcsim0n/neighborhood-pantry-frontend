import C from '../constants';
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

    case C.NEW_ERROR:
        return [ ...state, ...action.payload ]

    case C.CLEAR_ERRORS:
        return initialState
  default:
    return state
  }
}
