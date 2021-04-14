import styled from 'styled-components'
import { Container, lightOrange } from '../../globalStyle'
export const HeroSection = styled.section`
    width: 100%;
    background:
        linear-gradient(to right, rgba(255, 179, 71, .8), rgba(255, 204, 51, .8)), 
        url('https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg') no-repeat center / cover;
    height: 350px;
    position: relative;
`

export const Wrapper = styled(Container) `
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    position: relative;
`

export const TextWrapper = styled.div`
    text-align: center;
    color: white;
`

export const Heading = styled.h1`
    font-size: 3rem;
    font-weight: 700;
`

export const Text = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
`
export const Form = styled.form`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translateY(160%) translateX(-40%);
    width: 100%;
`

export const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1rem;
    margin-right: 2rem;
    filter: opacity(.5);
`

export const InputWrapper = styled.div`
    position: relative;
`

export const SearchInput = styled.input`
    border: none;
    font-size: 1rem;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0, 0.2); 
    padding: 2rem 3rem;
    background-color: white;
    width: 80%;
    outline-color: transparent;
    transition: outline-color 300ms ease-in-out;

    &:focus {
        outline: ${lightOrange} solid 1.5px;
    }
`