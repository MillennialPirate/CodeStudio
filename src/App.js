//OM GAN GANAPATHAYE NAMO NAMAH 
//JAI SHRI RAM 
//JAI BAJRANGBALI 
//AMME NARAYANA, DEVI NARAYANA, LAKSHMI NARAYANA, BAHDRE NARAYANA
import './App.css';
import Home from './components/Home';
import Signup from './components/signup';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import Signin from './components/signin';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = '/' render = {() => <Home/>}></Route>
        <Route exact path = '/signup' render = {() => <Signup/>}></Route>
        <Route exact path = '/signin' render = {() => <Signin/>}></Route>
      </div>
    </Router>
  );
}

export default App;
