import GlobalStyle from './globalStyle'
import { Navbar } from './components'
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
