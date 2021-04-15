import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTopRatedMovies } from '../../actions/moviesAction'
import { useEffect } from 'react'
import { Item } from '../../components'
import { Grid } from '../../globalStyle'
import { IMAGE_URL } from '../../apis/themoviedb'

const TopRatedMoviesPage = ({fetchTopRatedMovies, movies}) => {

    const renderTopRatedMovies = () => {
        if(!movies) {
            return null
        }
        return movies.map(({poster_path, name, id}) => {
            return (
                <Item imgURL={`${IMAGE_URL}/w500/${poster_path}`} alt={`${name}`} key={id}/> 
            )
        })
    }
    

    useEffect(() => {
        fetchTopRatedMovies()
    }, [])

    return (
        <Grid>
            {renderTopRatedMovies()}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.topRated.results
    }
}

export default withRouter(connect(mapStateToProps, {fetchTopRatedMovies})(TopRatedMoviesPage))