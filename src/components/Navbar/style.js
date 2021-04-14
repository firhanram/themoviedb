import styled from 'styled-components'
import {  black, Container, lightGray, orange } from '../../globalStyle'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background-color: ${lightGray};
    box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.05); 
    padding: 1rem 0;
`

export const Wrapper = styled(Container)`
    display: flex;
`

export const Brand = styled(Link)`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${orange};
`

export const Menu = styled.div`
    display: flex;
`

export const NavMenu = styled.ul`
    display: flex; 
    margin-left: 2.5rem;
    align-items: center;
    position: relative;
`

export const DropdownMenu = styled.div`
    position: absolute;
    padding: 1rem 0;
    width: 150px;
    border-radius: 5px;
    background-color: ${black};
    margin-top: 1rem;
    left: -0.5rem;
    visibility:hidden;
    opacity: 0;
    transition: all 200ms ease-in-out;
    box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.05);
`

export const NavList = styled.li`
    color: ${black};
    cursor: pointer;

    &:hover ${DropdownMenu} {
        opacity: 1;
        visibility: visible;
    }

    &:not(:first-child) {
        margin-left: 1.5rem;
    }

`

export const NavLink = styled(Link)`
    color: white;
    display:block;
    padding: 0 1rem;
    transition: all 200ms ease-in-out;

    &:hover {
        color: rgba(255, 255, 255, .8);
    }

    &:not(:first-child) {
        margin-top: 0.5rem;
    }
`