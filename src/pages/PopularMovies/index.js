import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchPopularMovies } from '../../actions/moviesAction'
import { Item } from '../../components'
import { Grid } from "../../globalStyle"
import { withRouter } from 'react-router-dom'
import { IMAGE_URL } from '../../apis/themoviedb'

const PopularPage = ({movies, fetchPopularMovies}) => {

    useEffect(() => {
        fetchPopularMovies()
    }, [])

    const renderPopularMovies = () => {
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
            {renderPopularMovies()}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.popular.results
    }
}

export default withRouter(connect(mapStateToProps, {fetchPopularMovies})(PopularPage))