import themoviedb, { API_KEY } from '../apis/themoviedb'
import {
    FETCH_POPULAR_MOVIES,
    FETCH_TRENDING_MOVIES_BY_DAY,
    FETCH_TRENDING_MOVIES_BY_WEEK,
    FETCH_NOW_PLAYING_MOVIES,
    FETCH_UPCOMING_MOVIES,
    FETCH_TOP_RATED_MOVIES
} from './types'

export const fetchPopularMovies = () => async (dispatch) => {
    const response = await themoviedb.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_POPULAR_MOVIES,
        payload: response.data
    })
}

export const fetchTrendingMoviesByDay = () => async (dispatch) => {
    const response = await themoviedb.get(`/trending/movie/day?api_key=${API_KEY}`)

    dispatch({
        type: FETCH_TRENDING_MOVIES_BY_DAY,
        payload: response.data
    })
}

export const fetchTrendingMoviesByWeek = () => async (dispatch) => {
    const response = await themoviedb.get(`/trending/movie/week?api_key=${API_KEY}`)

    console.log('Response',response.data)

    dispatch({
        type: FETCH_TRENDING_MOVIES_BY_WEEK,
        payload: response.data
    })
}

export const fetchNowPlayingMovies = () => async (dispatch) => {
    const response = await themoviedb.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type: FETCH_NOW_PLAYING_MOVIES,
        payload: response.data
    })
}

export const fetchUpcomingMovies = () => async (dispatch) => {
    const response = await themoviedb.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    
    dispatch({
        type: FETCH_UPCOMING_MOVIES,
        payload: response.data
    })
}

export const fetchTopRatedMovies = () => async (dispatch) => {
    const response = await themoviedb.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

    dispatch({
        type:FETCH_TOP_RATED_MOVIES,
        payload: response.data
    })
}