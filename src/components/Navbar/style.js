import styled from 'styled-components'
import {  Container, lightGray, orange } from '../../globalStyle'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background-color: ${lightGray};
    box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.05); 
    padding: 1rem 0;
`

export const MenuWrapper = styled(Container)`
    display: flex;
`

export const Brand = styled(Link)`
    font-size: 1.875rem;
    color: ${orange};
`