import themoviedb, { API_KEY } from '../apis/themoviedb'
import { FETCH_POPULAR_PEOPLE } from './types'

export const fetchPopularPeople = () => async (dispatch) => {
    const response = await themoviedb.get(`/person/popular?api_key=${API_KEY}&language=en-US&page=1`)

    console.log(response)

    dispatch({
        type: FETCH_POPULAR_PEOPLE,
        payload: response.data
    })
}