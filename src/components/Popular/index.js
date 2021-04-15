import {PopularSection, Img } from './style'
import Slider from "react-slick";
import { fetchPopularMovies } from '../../actions/moviesAction'
import {fetchPopularTvShows} from '../../actions/tvAction'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import { CategoryWrapper, Container, SectionTitle, TextWrapper, Category } from '../../globalStyle';
import { IMAGE_URL } from '../../apis/themoviedb'

const Popular = ({movies, fetchPopularMovies, fetchPopularTvShows, tvShows}) => {

    const[showPopularMovies, setShowPopularMovies] = useState(true)

    useEffect(() => {
        fetchPopularMovies()
        fetchPopularTvShows()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      }

    const renderPopularMovies = () => {
        if(!movies) {
            return null
        }
        return movies.map(({poster_path, name, id}) => {
            return (
                <Img src={`${IMAGE_URL}/w500/${poster_path}`} alt={`${name}`} key={id}/> 
            )
        })
    }

    const renderPopularTvShows = () => {
        if(!tvShows) return null

        return tvShows.map(({poster_path, id, name}) => {
            return (
                <Img src={`${IMAGE_URL}/w500/${poster_path}`} alt={`${name}`} key={id}/> 
            )
        })
    }

    return (
        <PopularSection>
            <Container>
                <TextWrapper>
                    <SectionTitle>What's Popular</SectionTitle>
                    <CategoryWrapper>
                        <Category
                            className={showPopularMovies ? 'active' : null}
                            onClick={() => {
                                setShowPopularMovies(true)
                            }}
                        >
                            Movies
                        </Category>
                        <Category
                            className={!showPopularMovies ? 'active' : null}
                            onClick={() => {
                                setShowPopularMovies(false)
                            }}
                        >
                            Tv Shows
                        </Category>
                    </CategoryWrapper>
                </TextWrapper>
                <Slider {...settings}>
                    {
                        showPopularMovies ? renderPopularMovies() : renderPopularTvShows()
                    }
                </Slider>
            </Container>
        </PopularSection>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.popular.results,
        tvShows: state.tvShows.popular.results
    }
}


export default connect(mapStateToProps, {fetchPopularMovies, fetchPopularTvShows})(Popular)