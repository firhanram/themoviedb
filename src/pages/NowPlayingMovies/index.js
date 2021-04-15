import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchNowPlayingMovies } from '../../actions/moviesAction'
import { useEffect } from 'react'
import { Grid } from '../../globalStyle'
import { Item } from '../../components'
import { IMAGE_URL } from '../../apis/themoviedb'

const NowPlayingPage = ({fetchNowPlayingMovies, movies}) => {

    useEffect(() => {
        fetchNowPlayingMovies()
    }, [])

    const renderNowPlayingMovies = () => {
        if(!movies) {
            return null
        }
        return movies.map(({poster_path, name, id}) => {
            return (
                <Item imgURL={`${IMAGE_URL}/w500/${poster_path}`} alt={`${name}`} key={id}/> 
            )
        })
    }

    return (
        <Grid>
            {renderNowPlayingMovies()}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.nowPlaying.results
    }
}

export default withRouter(connect(mapStateToProps, {fetchNowPlayingMovies})(NowPlayingPage))