import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home"> 
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
