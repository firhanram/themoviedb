import { 
    FETCH_NOW_PLAYING_MOVIES, 
    FETCH_POPULAR_MOVIES, 
    FETCH_TOP_RATED_MOVIES, 
    FETCH_TRENDING_MOVIES_BY_DAY,
    FETCH_TRENDING_MOVIES_BY_WEEK,
    FETCH_UPCOMING_MOVIES
} from "../actions/types"

const INITIAL_STATE = {
    popular: [],
    latest: [],
    todayTrendings: [],
    thisWeekTrendings: [],
    nowPlaying: [],
    upcoming: [],
    topRated: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_POPULAR_MOVIES:
            return {
                ...state,
                popular: action.payload
            }
        case FETCH_TRENDING_MOVIES_BY_DAY:
            return {
                ...state,
                todayTrendings: action.payload
            }
        case FETCH_TRENDING_MOVIES_BY_WEEK:
            return {
                ...state,
                thisWeekTrendings: action.payload
            }
        case FETCH_NOW_PLAYING_MOVIES:
            return {
                ...state,
                nowPlaying: action.payload
            }
        case FETCH_UPCOMING_MOVIES:
            return {
                ...state,
                upcoming: action.payload
            }
        case FETCH_TOP_RATED_MOVIES:
            return {
                ...state,
                topRated: action.payload
            }
        default:
            return state;
    }
}