import {createGlobalStyle} from 'styled-components'

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

export default globalStyle