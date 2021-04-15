import styled from 'styled-components'


export const Poster = styled.img`
    border-radius: 5px;
    width: 100%;
    transition: all 200ms ease-in-out;


    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,.5);
        filter: brightness(0.5);
    }
`