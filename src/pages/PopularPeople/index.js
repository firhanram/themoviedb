import { useEffect } from "react"
import { connect } from "react-redux"
import { fetchPopularPeople } from '../../actions/peopleAction'
import { Item } from '../../components'
import { Grid } from "../../globalStyle"
import { withRouter } from 'react-router-dom'
import { IMAGE_URL } from '../../apis/themoviedb'
import { Name, Person } from "./style"

const PopularPeople = ({people, fetchPopularPeople}) => {

    useEffect(() => {
        fetchPopularPeople()
        console.log('data', people)
    }, [])

    const renderPopularPeople = () => {
        if(!people) {
            return null
        }
        return people.map(({profile_path, name}, index) => {
            return (
                <Person>
                    <Item imgURL={`${IMAGE_URL}/original${profile_path}`} key={index}/> 
                    <Name>{name}</Name>
                </Person>
            )
        })
    }

    return (
        <Grid>
            {renderPopularPeople()}
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
        people: state.people.popular.results
    }
}

export default withRouter(connect(mapStateToProps, {fetchPopularPeople})(PopularPeople))