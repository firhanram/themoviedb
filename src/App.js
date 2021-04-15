import GlobalStyle from './globalStyle'
import { Navbar } from './components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { 
  Home, 
  NowPlayingMovies, 
  Popular as PopularPage, 
  UpcomingMovies, 
  TopRatedMovies, 
  PopularTvShows, 
  AiringToday
} from './pages';
import history from './utils/history';

function App(props) {

  return (
    <Router history={history}>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/popular" component={PopularPage} />
        <Route exact path="/movie/now-playing" component={NowPlayingMovies} />
        <Route exact path="/movie/upcoming" component={UpcomingMovies} />
        <Route exact path="/movie/top-rated" component={TopRatedMovies} />
        <Route exact path="/tv/popular" component={PopularTvShows} />
        <Route exact path="/tv/airing-today" component={AiringToday} />
      </Switch>
    </Router>
  );
}

export default App

