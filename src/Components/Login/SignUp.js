import SignUpForm1 from './SignUpForm1'
import SignUpForm2 from './SignUpForm2'
import UserRoleChoosing from './UserRoleChoosing'
import SignUpForm4 from './SignUpForm4'
import PrivateRouteToReg from '../../Firebase/AuthSetup/PrivateRoute/PrivateRouteToReg'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './Login1.css'

function SignUp() {
    return (
        <>
            <div className="image-form-division">
                <div className="image" />
                <div className="form">
                    <div className="sign-up-text">Реєстрація</div>
                    <Router>
                        <Switch>
                            <PrivateRouteToReg
                                exact
                                path="/registration"
                                component={UserRoleChoosing}
                            />
                            <PrivateRouteToReg
                                exact
                                path="/registration/signup2"
                                component={SignUpForm1}
                            />
                            <PrivateRouteToReg
                                exact
                                path="/registration/signup3"
                                component={SignUpForm2}
                            />
                            <PrivateRouteToReg
                                exact
                                path="/registration/signup4"
                                component={SignUpForm4}
                            />
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    )
}

export default SignUp
