import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//Pages
import Home from './pages/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Movies from './pages/Movies';

//Context
import { ModalProvider } from './contexts/ModalContext';

function App() {
  return (
    <ModalProvider>
      <Router>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/characters" component={Characters}/>
              <Route path="/comics" component={Comics}/>
              <Route path="/movies" component={Movies}/>
          </Switch>
      </Router>
    </ModalProvider>
  );
}

export default App;
