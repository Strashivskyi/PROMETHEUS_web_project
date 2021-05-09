import {Link} from 'react-router-dom'
import './PatientTemplateSwitch.css'
import './../Authentification/SignIn2.css'
import './../Authentification/SignIn2.css'

function PatientTemplateSwitch(params) {
    if (localStorage.getItem('homeType') == 'home') {
        return (
            <>
                <div className="col-6 row some_i_forgot_for_what_container justify-content-center">
                    <Link
                        to="/home"
                        className="col-2 patients_switcher_links text-align-right chosen_link"
                    >
                        Пацієнти
                    </Link>
                    {/* <div className="col-1 text-align-center text-align-center ">
                        -
                    </div>
                    <Link
                        className="col-5 patients_switcher_links text-align-left"
                        to="/vb-mapp"
                        onClick={() =>
                            localStorage.setItem('templateType', 'private')
                        }
                    >
                        Шаблони
                    </Link> */}
                </div>
            </>
        )
    }
    if (localStorage.getItem('homeType') != 'home') {
        return (
            <>
                <div className="col-6 row some_i_forgot_for_what_container justify-content-center">
                    <Link
                        to="/home"
                        className="col-5 patients_switcher_links text-align-right"
                    >
                        Пацієнти
                    </Link>
                    {/* <div className="col-1 text-align-center">-</div>
                    <Link
                        to="/vb-mapp"
                        onClick={() =>
                            localStorage.setItem('templateType', 'private')
                        }
                        className="col-5 patients_switcher_links text-align-left chosen_link"
                    >
                        Шаблони
                    </Link> */}
                </div>
            </>
        )
    }
}
export default PatientTemplateSwitch
