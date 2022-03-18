import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
      <div id='NavBar'>
        <NavBar />
      </div>
        <Route exact path= '/' render={() => <LandingPage />} />
        <Route path='/home' render={() => <Home />} />
      
    </div>
  );
}

export default App;
