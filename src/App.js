// COMPONENTS
import WelcomePage from './Components/WelcomePage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
// CSS
import './App.css';
// Router Imports
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<WelcomePage />}/>
          <Route path="/signup" element = {<SignUp />}/>
          <Route path="/login" element = {<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
