import GlobalStyle from './globalStyle'
import { Hero, Navbar, Popular } from './components'
import { BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchPopularMovies } from './actions/moviesAction'

function App(props) {
  useEffect(() => {
    props.fetchPopularMovies()
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero/>
      <Popular />
    </Router>
  );
}

const mapDispatchToProps = {
  fetchPopularMovies
}

export default connect(null, mapDispatchToProps)(App);
