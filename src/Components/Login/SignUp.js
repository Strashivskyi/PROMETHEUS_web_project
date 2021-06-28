import SignUpForm1 from './SignUpForm1'
import SignUpForm2 from './SignUpForm2'
import SignUpForm4 from './SignUpForm4'
import PrivateRouteToReg from '../../Firebase/AuthSetup/PrivateRoute/PrivateRouteToReg'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'
import Logo from '../../assets/image 27.svg'
import './../Authentification/SignIn2.css'
import './SignUp.css'

function SignUp() {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <img
                        src={Logo}
                        alt="big logo"
                        className="signup_logo col-8 col-md-5"
                    />
                </div>
                <div className="row  justify-content-center">
                    <span className="sign-up-text col-12 col-md-8 col-xl-6 text-align-center">
                        Реєстрація
                    </span>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-xl-6 row signup-form justify-content-center">
                        <div className="col-12 row sign-up-cont justify-content-center">
                            <HashRouter className="col-12 row">
                                <Switch>
                                    <PrivateRouteToReg
                                        exact
                                        path="/registration"
                                        component={SignUpForm1}
                                    />
                                    <PrivateRouteToReg
                                        exact
                                        path="/registration/signup1"
                                        component={SignUpForm2}
                                    />
                                    <PrivateRouteToReg
                                        exact
                                        path="/registration/signup2"
                                        component={SignUpForm4}
                                    />
                                </Switch>
                            </HashRouter>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
