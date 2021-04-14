import { Brand, Wrapper, Nav, Menu, NavMenu, NavList, DropdownMenu, NavLink } from './style'

const Navbar = () => {
    return (
        <Nav>
            <Wrapper>
                <Brand>The Movie DB</Brand>
                <Menu>
                    <NavMenu>
                        <NavList>
                            Movies
                            <DropdownMenu>
                                <NavLink>Popular</NavLink>
                                <NavLink>Now Plyaing</NavLink>
                                <NavLink>Upcoming</NavLink>
                                <NavLink>Top Rated</NavLink>
                            </DropdownMenu>
                        </NavList>
                        <NavList>
                            TV Shows
                            <DropdownMenu>
                                <NavLink>Popular</NavLink>
                                <NavLink>Airing Today</NavLink>
                                <NavLink>On Tv</NavLink>
                                <NavLink>Top Rated</NavLink>
                            </DropdownMenu>
                        </NavList>
                        <NavList>
                            People
                            <DropdownMenu>
                                <NavLink>Popular People</NavLink>
                            </DropdownMenu>
                        </NavList>
                    </NavMenu>
                </Menu>
            </Wrapper>
        </Nav>
    )
}

export default Navbar