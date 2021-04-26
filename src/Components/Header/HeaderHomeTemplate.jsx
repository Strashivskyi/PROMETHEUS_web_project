import app from '../../Firebase/firebase'
import React from 'react'
import SignOut from '../../assets/SignOut.svg'
import Logo from '../../assets/Logo.svg'
import PatientTemplateSwitch from './PatientTemplateSwitch'
import './HeaderHomeTemplate.css'
function signOut() {
    localStorage.setItem('user', 'none')
    app.auth().signOut()
}

function HeaderHomeTemplate(params) {
    return (
        <div className="container header_bootstrap">
            <div className="row justify-content-between main_header_content_container">
                <img src={Logo} className="col-3 header_bootstrap_logo" />
                <PatientTemplateSwitch className="col-6 header_bootstrap_switcher row" />
                <img
                    className="col-3 header_bootstrap_door"
                    src={SignOut}
                    onClick={() => signOut()}
                />
            </div>
            <div className="row header_line" />
        </div>
    )
}
export default HeaderHomeTemplate
