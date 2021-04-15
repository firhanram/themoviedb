import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchOnTheAirTvShows } from '../../actions/tvAction'
import { Item } from '../../components'
import { Grid } from "../../globalStyle"
import { withRouter } from 'react-router-dom'
import { IMAGE_URL } from '../../apis/themoviedb'

const OnTv = ({tvShows, fetchOnTheAirTvShows}) => {

    useEffect(() => {
        fetchOnTheAirTvShows()
    }, [])

    const renderOnTheAirTvShows = () => {
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
            {renderOnTheAirTvShows()}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        tvShows: state.tvShows.onTheAir.results
    }
}

export default withRouter(connect(mapStateToProps, {fetchOnTheAirTvShows})(OnTv))