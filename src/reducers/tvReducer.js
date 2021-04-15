import { 
    FETCH_POPULAR_TV_SHOWS,
    FETCH_AIRING_TODAY_TV_SHOWS,
    FETCH_ON_THE_AIR_TV_SHOWS,
    FETCH_TOP_RATED_MOVIES, 
    FETCH_TOP_RATED_TV_SHOWS
} from "../actions/types"

const INITIAL_STATE = {
    popular: [],
    airingToday: [],
    onTheAir: [],
    topRated: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_POPULAR_TV_SHOWS:
            return {
                ...state,
                popular: action.payload
            }
        case FETCH_AIRING_TODAY_TV_SHOWS:
            return {
                ...state,
                airingToday: action.payload
            }
        case FETCH_ON_THE_AIR_TV_SHOWS:
            return {
                ...state,
                onTheAir: action.payload
            }
        case FETCH_TOP_RATED_TV_SHOWS:
            return {
                ...state,
                topRated: action.payload
            }
        default:
            return state;
    }
}