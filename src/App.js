import './App.css';
import SignUp from './Components/Login/SignUp';
import SignIn from "./Components/SignIn/SignIn";
import ForgetPassword from "./Components/SignIn/RandomForgetPassword";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
  <Switch>
    <Route exact path="/" component={SignIn}/>
    <Route exact path="/forgetPassword" component={ForgetPassword}/>
    <Route exact path="/registration" component={SignUp}/>
  </Switch>
  </Router>  
      </>
  );
}

export default App;
