import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUpcomingMovies } from '../../actions/moviesAction'
import { useEffect } from 'react'
import { Item } from '../../components'
import { Grid } from '../../globalStyle'
import { IMAGE_URL } from '../../apis/themoviedb'

const UpcomingPage = ({fetchUpcomingMovies, movies}) => {

    useEffect(() => {
        fetchUpcomingMovies()
    }, [])

    const renderUpcomingMovies = () => {
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
            {renderUpcomingMovies()}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.upcoming.results
    }
}

export default withRouter(connect(mapStateToProps, {fetchUpcomingMovies})(UpcomingPage))