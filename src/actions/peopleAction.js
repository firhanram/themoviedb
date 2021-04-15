import themoviedb, { API_KEY } from '../apis/themoviedb'
import { FETCH_POPULAR_PEOPLE, FETCH_UPCOMING_MOVIES } from './types'

export const fetchPopularPeople = () => async (dispatch) => {
    const response = themoviedb.get(`/person/popular?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_UPCOMING_MOVIES,
        payload: response.data
    })
}