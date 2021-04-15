import { FETCH_AIRING_TODAY_TV_SHOWS, FETCH_ON_THE_AIR_TV_SHOWS, FETCH_POPULAR_TV_SHOWS, FETCH_TOP_RATED_TV_SHOWS } from './types'
import themoviedb, { API_KEY } from '../apis/themoviedb'

export const fetchPopularTvShows = () => async (dispatch) => {
    const response = await themoviedb.get(`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_POPULAR_TV_SHOWS,
        payload: response.data
    })
}

export const fetchAiringTodayTvShows = () => async (dispatch) => {
    const response = await themoviedb.get(`/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_AIRING_TODAY_TV_SHOWS,
        payload: response.data
    })
}

export const fetchOnTheAirTvShows = () => async (dispatch) => {
    const response = await themoviedb.get(`/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_ON_THE_AIR_TV_SHOWS,
        payload: response.data
    })
}

export const fetchTopRatedTvShows = () => async (dispatch) => {
    const response = await themoviedb.get(`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_TOP_RATED_TV_SHOWS,
        payload: response.data
    })
}