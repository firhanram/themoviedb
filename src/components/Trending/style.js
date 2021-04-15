import styled from 'styled-components'

export const LatestTrailersSection = styled.section`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    
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

export const Img = styled.img`
    border-radius: 5px;
    transition: all 200ms ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`

