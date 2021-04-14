import styled from 'styled-components'
import { Container, lightOrange } from '../../globalStyle'

export const PopularSection = styled.section`
    width: 100%;
    margin-top: 5rem;
    height: 300px;

    .slick-slide {
        height: 100%;
        &:not(:first-child) {
            margin-left: 1rem;
        }
    }

    ${Container} {
        height: 100%;
    }

    .slick-slider {
        height: 100%;
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
        z-index: 9999;
    }
`
export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`

export const TypeWrapper = styled.div`
    display: flex;
    margin-left: 1.5rem;
`

export const Type = styled.div`
    &.active {
        background-color: ${lightOrange};
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    }

    cursor: pointer;
    padding: .5rem 1rem;
    text-align: center;
    font-weight: 600;
    border-radius: 5px;

    &:not(:first-child) {
        margin-left: 1rem;
    }
`
