import styled, {createGlobalStyle} from 'styled-components'

const globalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 100%;
        font-family: 'Source Sans Pro', sans-serif;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`

export const Container = styled.div`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
`

export const lightBlack = '#393534'
export const black = '#22211F';
export const orange = '#FF7314';
export const lightGray = '#4F4F4'

export default globalStyle