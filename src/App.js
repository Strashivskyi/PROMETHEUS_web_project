import './App.css';
import SignUp from './Components/Login/SignUp';
import SignIn from "./Components/SignIn/SignIn";
import Patient from "./Components/Patient/Patient";
import ForgetPassword from "./Components/SignIn/ForgetPassword";
import PrivateRouteToReg from "./Firebase/AuthSetup/PrivateRoute/PrivateRouteToReg";

import { AuthProvider } from "./Firebase/AuthSetup/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRouteToLogin from './Firebase/AuthSetup/PrivateRoute/PrivateRouteToLogin';
import PatientInfoPage from './Components/PatientInfo/PatientInfoPage';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <PrivateRouteToLogin exact path="/home" component={Patient} />
            <PrivateRouteToLogin exact path="/patient" component={PatientInfoPage} />
            <Route exact path="/forgetPassword" component={ForgetPassword} />
            <PrivateRouteToReg path="/registration" component={SignUp} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;