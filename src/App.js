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
  AiringToday,
  OnTv,
  TopRatedTvShows,
  PopularPeople,
  RegistrationPage
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
        <Route exact path="/tv/on-the-air" component={OnTv} />
        <Route exact path="/tv/top-rated" component={TopRatedTvShows} />
        <Route exact path="/people/popular" component={PopularPeople} />
        <Route exact path="/registration" component={RegistrationPage} />
      </Switch>
    </Router>
  );
}

export default App

