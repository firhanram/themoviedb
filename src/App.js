import GlobalStyle from './globalStyle'
import { Hero, Navbar, Popular } from './components'
import { BrowserRouter as Router} from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App(props) {

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero/>
      <Popular />
    </Router>
  );
}

export default App

