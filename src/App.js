import GlobalStyle from './globalStyle'
import { Hero, Navbar } from './components'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Hero/>
    </Router>
  );
}

export default App;
