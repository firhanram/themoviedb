import { FETCH_POPULAR_TV_SHOWS } from './types'
import themoviedb, { API_KEY } from '../apis/themoviedb'

export const fetchPopularTvShows = () => async (dispatch) => {
    const response = await themoviedb.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_POPULAR_TV_SHOWS,
        payload: response.data
    })
}