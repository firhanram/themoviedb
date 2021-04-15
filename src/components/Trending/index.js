import { Category, CategoryWrapper, Container, SectionTitle, TextWrapper } from "../../globalStyle"
import { LatestTrailersSection, Img } from "./style"
import { fetchTrendingMoviesByDay, fetchTrendingMoviesByWeek } from "../../actions/moviesAction"
import { connect } from 'react-redux'
import { useEffect } from "react"
import Slider from 'react-slick'
import { useState } from "react"


const Trending = ({fetchTrendingMoviesByDay, todayTrendings, fetchTrendingMoviesByWeek, thisWeekTrendings}) => {
    const imageUrl = 'https://image.tmdb.org/t/p/w500';

    const[showTodayTrendings, setShowTodayTrendings] = useState(true)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }

    useEffect(() => {
        fetchTrendingMoviesByDay()
        fetchTrendingMoviesByWeek()
        console.log('This Week Trendings', thisWeekTrendings)
    }, [])

    const renderTrendingTodayMovies = () => {
        if(!todayTrendings) {
            return null
        }
        return todayTrendings.map(({poster_path, name, id}) => {
            return (
                <Img src={`${imageUrl}${poster_path}`} alt={`${name}`} key={id}/> 
            )
        })
    }

    const renderTrendingThisWeekMovies = () => {
        if(!thisWeekTrendings) {
            return null
        }
        return thisWeekTrendings.map(({poster_path, name, id}) => {
            return (
                <Img src={`${imageUrl}${poster_path}`} alt={`${name}`} key={id}/> 
            )
        })
    }

    return (
        <LatestTrailersSection>
            <Container>
                <TextWrapper>
                    <SectionTitle>Trending</SectionTitle>
                    <CategoryWrapper>
                        <Category
                            className={showTodayTrendings ? 'active' : null}
                            onClick={() => {
                                setShowTodayTrendings(true)
                            }}
                        >
                            Today
                        </Category>
                        <Category
                            className={!showTodayTrendings ? 'active' : null}
                            onClick={() => {
                                setShowTodayTrendings(false)
                            }}
                        >
                            This Week
                        </Category>
                    </CategoryWrapper>
                </TextWrapper>
                <Slider {...settings}>
                    { todayTrendings ? renderTrendingTodayMovies() : renderTrendingThisWeekMovies()}
                </Slider>
            </Container>
        </LatestTrailersSection>
    )
}

const mapStateToProps = (state) => {
    return {
        todayTrendings: state.movies.todayTrendings.results,
        thisWeekTrendings: state.movies.thisWeekTrendings.results
    }
}

export default connect(mapStateToProps, {fetchTrendingMoviesByDay,fetchTrendingMoviesByWeek})(Trending)