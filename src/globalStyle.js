import styled, {createGlobalStyle} from 'styled-components'
import { Field, Form as FormikForm } from "formik"

export const lightBlack = '#393534'
export const black = '#22211F';
export const orange = '#FF7314';
export const lightGray = '#4F4F4'
export const lightOrange = '#FFCC33'
export const darkOrange = '#FFB347'

const globalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-size: 100%;
        font-family: 'Source Sans Pro', sans-serif;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`

export const SectionTitle = styled.h3`
    font-weight: 700;
    color: black;
    font-size: 2rem;
`

export const TextWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`

export const CategoryWrapper = styled.div`
    display: flex;
    margin-left: 1.5rem;
`

export const Category = styled.div`
    cursor: pointer;
    padding: .5rem 1rem;
    text-align: center;
    font-weight: 600;
    border-radius: 5px;

    &.active {
        background-color: ${lightOrange};
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    }

    &:not(:first-child) {
        margin-left: 1rem;
    }
`

export const Container = styled.div`
    width: 85%;
    margin-left: auto;
    margin-right: auto;
`

export const Grid = styled(Container)`
    display: grid;
    margin-top: 2rem;
    margin-bottom: 2rem;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    position:relative;
`

export const Form = styled(FormikForm)`
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    padding: 1.5rem 1rem;
    border-top: 5px solid ${darkOrange};
    width: 50%;
    display: grid;
`

export const FormRow = styled.div`
    display: flex;
    align-items: center;
`

export const FormCol = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    &:not(:first-child) {
        margin-left: 1rem;
    }
`

export const Label = styled.label`
    font-weight: 600;

    &.radio {
        margin-top: 1rem;
    }

    &.address {
        margin-top: 1rem;
    }

    &.radio:nth-child(3) {
        margin-left: 1rem;
    }


`
export const Input = styled(Field)`
    padding: .5rem .8rem;
    margin: .8rem 0;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    border:0;
    
    &:focus {
        outline: ${lightOrange} solid 1.5px;
    }
`

export const Button = styled.button`
    border: 0;
    padding: .5rem 2rem;
    border-radius: 5px;
    background-color : ${lightOrange};
    font-weight: 600;
    justify-self: end;
    cursor: pointer;
`


export const Select = styled.select`
    padding: .5rem .8rem;
    margin: .8rem 0;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    border:0;
    
    &:focus {
        outline: ${lightOrange} solid 1.5px;
    }
`



export default globalStyle