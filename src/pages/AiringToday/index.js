import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchAiringTodayTvShows } from '../../actions/tvAction'
import { Item } from '../../components'
import { Grid } from "../../globalStyle"
import { withRouter } from 'react-router-dom'
import { IMAGE_URL } from '../../apis/themoviedb'

const AiringToday = ({tvShows, fetchAiringTodayTvShows}) => {

    useEffect(() => {
        fetchAiringTodayTvShows()
    }, [])

    const renderAiringTodayTvShows = () => {
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
            {renderAiringTodayTvShows()}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        tvShows: state.tvShows.airingToday.results
    }
}

export default withRouter(connect(mapStateToProps, {fetchAiringTodayTvShows})(AiringToday))