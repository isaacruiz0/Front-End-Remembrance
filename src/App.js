// COMPONENTS
import WelcomePage from './Components/welcomePage/WelcomePage';
import SignUp from './Components/signup/SignUp';
import Login from './Components/login/Login';
import Dashboard from './Components/dashboard/Dashboard';
import CreatePerson from './Components/createPerson/CreatePerson';
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
          <Route path="/dashboard" element = {<Dashboard />}/>
          <Route path="/createperson" element = {<CreatePerson />}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
