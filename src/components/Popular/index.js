import { PopularSection, TypeWrapper, Wrapper } from './style'
import Slider from "react-slick";
import { Heading, Img, TextWrapper, Type } from './style';
import { fetchPopularMovies } from '../../actions/moviesAction'
import {fetchPopularTvShows} from '../../actions/tvAction'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react';
import { Container, lightOrange } from '../../globalStyle';

const Popular = ({movies, fetchPopularMovies, fetchPopularTvShows, tvShows}) => {
    const imageUrl = 'https://image.tmdb.org/t/p/w500';

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
        return movies.map(({poster_path}) => {
            return (
                <Img src={`${imageUrl}${poster_path}`} alt=""/> 
            )
        })
    }

    const renderPopularTvShows = () => {
        if(!tvShows) return null

        return tvShows.map(({poster_path, id}) => {
            return (
                <Img src={`${imageUrl}${poster_path}`} key={id} />
            )
        })
    }

    return (
        <PopularSection>
            <Container>
                <TextWrapper>
                    <Heading>What's Popular</Heading>
                    <TypeWrapper>
                        <Type
                            className={showPopularMovies ? 'active' : null}
                            onClick={() => {
                                setShowPopularMovies(true)
                            }}
                        >
                            Movies
                        </Type>
                        <Type
                            className={!showPopularMovies ? 'active' : null}
                            onClick={() => {
                                setShowPopularMovies(false)
                            }}
                        >
                            Tv Shows
                        </Type>
                    </TypeWrapper>
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