import { Brand, Wrapper, Nav, Menu, NavMenu, NavList, DropdownMenu, NavLink, Registration } from './style'

const Navbar = () => {
    return (
        <Nav>
            <Wrapper>
                <Brand to="/">The Movie DB</Brand>
                <Menu>
                    <NavMenu>
                        <NavList>
                            Movies
                            <DropdownMenu>
                                <NavLink to="/movie/popular">Popular</NavLink>
                                <NavLink to="/movie/now-playing">Now Plyaing</NavLink>
                                <NavLink to="/movie/upcoming">Upcoming</NavLink>
                                <NavLink to="/movie/top-rated">Top Rated</NavLink>
                            </DropdownMenu>
                        </NavList>
                        <NavList>
                            TV Shows
                            <DropdownMenu>
                                <NavLink to="/tv/popular">Popular</NavLink>
                                <NavLink to="/tv/airing-today">Airing Today</NavLink>
                                <NavLink to="/tv/on-the-air">On Tv</NavLink>
                                <NavLink to="/tv/top-rated">Top Rated</NavLink>
                            </DropdownMenu>
                        </NavList>
                        <NavList>
                            People
                            <DropdownMenu>
                                <NavLink to="/people/popular">Popular People</NavLink>
                            </DropdownMenu>
                        </NavList>
                    </NavMenu>
                    <Registration>Registration</Registration>
                </Menu>
            </Wrapper>
        </Nav>
    )
}

export default Navbar