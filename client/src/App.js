import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import CreateActivity from './components/CreateActivity/CreateActivity';


function App() {
  return (
    <div className="App">
      <div id='NavBar'>
        <NavBar />
      </div>
        <Route exact path= '/' render={() => <LandingPage />} />
        <Route path='/home' render={() => <Home />} />
        <Route path='/create-activity' render={() => <CreateActivity />} />
    </div>
  );
}

export default App;
