import { combineReducers } from "redux"
import movieReducer from './movieReducer'
import tvReducer from './tvReducer'
import peopleReducer from './peopleReducer'
import formReducer from './formReducer'

export default combineReducers({
    movies: movieReducer,
    tvShows: tvReducer,
    people: peopleReducer,
    form: formReducer
})