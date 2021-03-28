import {Link} from 'react-router-dom'
import app from '../../Firebase/firebase'
import React from 'react'
import SignOut from '../../assets/SignOut.svg'
import Logo from '../../assets/Logo.svg'
import './HomeHeader.css'
import PatientTemplateSwitch from './PatientTemplateSwitch'
function signOut() {
    localStorage.setItem('user', 'none')
    app.auth().signOut()
}
function HeaderHomeTemplate(params) {
    return (
        <>
            <div className="header">
                <div style={{width: '93.2%', alignSelf: 'center'}}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <img
                            className="hover_on_logo"
                            src={Logo}
                            width="14.7%"
                            style={{
                                position: 'relative',
                            }}
                        />

                        <PatientTemplateSwitch />

                        <input
                            className="search"
                            type="text"
                            name="search"
                            placeholder="‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎Пошук.."
                        />
                        <img
                            src={SignOut}
                            onClick={() => signOut()}
                            className="sign_out_button_header"
                            width="4%"
                            style={{
                                cursor: 'pointer',
                                position: 'relative',
                                marginLeft: '10%',
                            }}
                        />
                    </div>

                    <h1
                        style={{
                            border: 'none',
                            borderBottom: ' 1px solid #6F6F6F',
                            alignSelf: 'center',
                        }}
                    />
                </div>
            </div>
        </>
    )
}
export default HeaderHomeTemplate
