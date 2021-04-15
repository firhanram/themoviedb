import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchPopularTvShows } from '../../actions/tvAction'
import { Item } from '../../components'
import { Grid } from "../../globalStyle"
import { withRouter } from 'react-router-dom'
import { IMAGE_URL } from '../../apis/themoviedb'

const PopularTvShows = ({tvShows, fetchPopularTvShows}) => {

    useEffect(() => {
        fetchPopularTvShows()
    }, [])

    const renderPopularTvShows = () => {
        if(!tvShows) {
            return null
        }
        return tvShows.map(({poster_path, name, id}) => {
            return (
                <Item imgURL={`${IMAGE_URL}/w500/${poster_path}`} alt={`${name}`} key={id}/> 
            )
        })
    }

    return (
        <Grid>
            {renderPopularTvShows()}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        tvShows: state.tvShows.popular.results
    }
}

export default withRouter(connect(mapStateToProps, {fetchPopularTvShows})(PopularTvShows))