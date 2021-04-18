import styled from "styled-components"
import { Field } from "formik"
import { lightOrange } from "../../globalStyle"

export const RadioInput = styled(Field)`
    margin-left: .5rem;
    margin-top: 1rem;
`

export const TextArea = styled(Field)`
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    border: none;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    padding: .5rem .8rem;
    font-family: 'Source Sans Pro', sans-serif;

    &:focus {
        outline: ${lightOrange} solid 1.5px;
    }
`

export const ButtonWrapper = styled.div`
    justify-self: end;

    & .cancel {
        background-color: #ff2222;
        margin-right: 1rem;
    }
`