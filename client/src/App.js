import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import CreateActivity from './components/CreateActivity/CreateActivity';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
  return (
    <div className="App">
      <div id='NavBar'>
        <NavBar />
      </div>
        <Route exact path= '/' render={() => <LandingPage />} />
        <Route path='/home' render={() => <Home />} />
        <Route path='/create-activity' render={() => <CreateActivity />} />
        <Route path='/country/:idPais' render={(match) => <CountryDetail props={match}/>} />
    </div>
  );
}

export default App;
