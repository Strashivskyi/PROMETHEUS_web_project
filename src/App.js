import './App.css';
import SignUpForm1 from "./Components/Login/SignUpForm1";
import SignUpForm2 from "./Components/Login/SignUpForm2";
import SignUpForm3 from "./Components/Login/SignUpForm3";
import SignUpForm4 from "./Components/Login/SignUpForm4";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./Components/Login/Login1.css";

function App() {
  return (
    <>
    <div className="image-form-division">
        <div className="image"/>
        <div className="form">
            <div className="sign-up-text"> Sign up</div>
            <Router>
  <Switch>
    <Route exact path="/" component={SignUpForm1}/>
    <Route exact path="/signup2" component={SignUpForm2}/>
    <Route exact path="/signup3" component={SignUpForm3}/>
    <Route exact path="/signup4" component={SignUpForm4}/>

  </Switch>
  </Router>  
        </div>
    </div>

    </>
  );
}

export default App;
