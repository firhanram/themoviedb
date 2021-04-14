import GlobalStyle from './globalStyle'
import { Hero, Navbar, Popular } from './components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Home } from './pages';
import history from './utils/history';

function App(props) {

  return (
    <Router history={history}>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App

