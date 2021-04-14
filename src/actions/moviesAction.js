import themoviedb, { API_KEY } from '../apis/themoviedb'
import {
    FETCH_POPULAR_MOVIES
} from './types'

export const fetchPopularMovies = () => async (dispatch) => {
    const response = await themoviedb.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload: response.data
    })
}