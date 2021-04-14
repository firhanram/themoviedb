import { FETCH_POPULAR_TV_SHOWS } from "../actions/types"

const INITIAL_STATE = {
    popular: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_POPULAR_TV_SHOWS:
            return {
                ...state,
                popular: action.payload
            }
        default:
            return state;
    }
}