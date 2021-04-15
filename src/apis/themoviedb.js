import axios from 'axios'

export const API_KEY = '6350249b27b4a30cbcfb32c7155caa6e'
export const IMAGE_URL = 'https://image.tmdb.org/t/p'

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})