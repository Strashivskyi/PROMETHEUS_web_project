import './App.css'
import SignUp from './Components/Login/SignUp'
import SignIn from './Components/SignIn/SignIn'
import Patient from './Components/Patient/Patient'
import ForgetPassword from './Components/SignIn/ForgetPassword'
import PrivateRouteToReg from './Firebase/AuthSetup/PrivateRoute/PrivateRouteToReg'
import RenderProgram from './Components/Program/ProgramBranching'
import {AuthProvider} from './Firebase/AuthSetup/Auth'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {HashRouter} from 'react-router-dom'
import PrivateRouteToLogin from './Firebase/AuthSetup/PrivateRoute/PrivateRouteToLogin'
import PatientInfoRender from './Components/PatientInfo/PatientInfoBranching'
import RenderProgramList from './Components/ProtocolList/ProtocolListBranching'
import TherapyResult from './Components/TherapyResult/TherapyResult'
import RegistrationPatient from './Components/RegistrationPatient/RegPatientPage'
import ProgramTemplate from './Components/ProgramTemplate/ProgramTemplate'
import HomeTemplate from './Components/HomeTemplate/HomeTemplate'
import ProgramTemplatePublic from './Components/ProgramTemplate/ProgramTemplatePublic'
import ProtocolListTemplate from './Components/HomeTemplate/TemplateProtocolList/ProtocolListTemplate'
import ProgramEditableTemplate from './Components/HomeTemplate/EditProgramTemplate/ProgramEditableTemplate'
import ListMoreInfoTemplate from './Components/HomeTemplate/TemplateMoreInfo/ListMoreInfoTemplate'
import ProgramTemplateView from './Components/HomeTemplate/TemplateMoreInfo/ProgramTemplateView'
function App() {
    return (
        <>
            <HashRouter>
                <AuthProvider>
                    <Switch>
                        <Route exact path="/" component={SignIn} />
                        <PrivateRouteToLogin
                            exact
                            path="/home"
                            component={Patient}
                        />
                        <Route
                            exact
                            path="/forgetPassword"
                            component={ForgetPassword}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/program"
                            component={RenderProgram}
                        />
                        <PrivateRouteToReg
                            path="/registration"
                            component={SignUp}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/protocol-list"
                            component={RenderProgramList}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/patient"
                            component={PatientInfoRender}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/patient/result_of_therapy"
                            component={TherapyResult}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/patient_registration"
                            component={RegistrationPatient}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/program-template"
                            component={ProgramTemplate}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/home-template"
                            component={HomeTemplate}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/public-template"
                            component={ProgramTemplatePublic}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/create-template"
                            component={ProtocolListTemplate}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/program-template-edit"
                            component={ProgramEditableTemplate}
                        />

                        <PrivateRouteToLogin
                            exact
                            path="/template-more-info"
                            component={ListMoreInfoTemplate}
                        />
                        <PrivateRouteToLogin
                            exact
                            path="/template-more-info-protocol"
                            component={ProgramTemplateView}
                        />
                    </Switch>
                </AuthProvider>
            </HashRouter>
        </>
    )
}

export default App
