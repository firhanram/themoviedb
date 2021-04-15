import styled from 'styled-components'
import { Category, Container, lightOrange } from '../../globalStyle'

export const PopularSection = styled.section`
    width: 100%;
    margin-top: 5rem;

    .slick-slide {
        height: 100%;
        &:not(:first-child) {
            margin-left: 1rem;
        }
    }

    .slick-slider {
        height: 400px;
    }

    .slick-list {
        height: 100%;
    }
`

export const Heading = styled.h3`
    font-weight: 700;
    color: black;
    font-size: 2rem;
`


export const Img = styled.img`
    border-radius: 5px;
    transition: all 200ms ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

