import styled from 'styled-components'
import {  black, Container, lightGray, orange } from '../../globalStyle'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    background-color: ${lightGray};
    padding: 1rem 0;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0, 0.2); 
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
    justify-content: space-between;
    width: calc(100% - 141.85px);
    align-items:center;
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
    margin-top: .5rem;
    visibility:hidden;
    z-index: 1;
    opacity: 0;
    transition: all 280ms ease-in-out;
    box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.05);
`

export const NavList = styled.li`
    color: ${black};
    cursor: pointer;

    &:hover ${DropdownMenu} {
        opacity: 1;
        visibility: visible;
    }

    &:hover {
        color: ${orange};
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
        color: ${orange};
    }

    &:not(:first-child) {
        margin-top: 0.5rem;
    }
`

export const Registration = styled(NavLink)`
    color: ${black};
    margin: 0;
    padding: 0;
    align-self: center;



    &:not(:first-child) {
        margin-top: 0;
    }
`