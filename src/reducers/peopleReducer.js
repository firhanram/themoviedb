import { FETCH_POPULAR_PEOPLE } from '../actions/types'

const INITIAL_STATE = {
    popular: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ( state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_POPULAR_PEOPLE:
            return {
                ...state,
                popular: action.payload
            }
        default:
            return state
    }
}