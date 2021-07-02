import React, {useState} from 'react'
import './ProgramHeader.css'
import './Header.css'
import SignOut from '../../assets/SignOut.svg'
import Logo from '../../assets/Logo.svg'
import app from '../../Firebase/firebase'
import PatientTemplateSwitch from './PatientTemplateSwitch'
function signOut() {
    localStorage.setItem('user', '@gmail')
    app.auth().signOut()
}
function Header() {
    return (
        <>
            <div class="container">
                <div className="header">
                    <div style={{width: '100%', alignSelf: 'center'}}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <img
                                src={Logo}
                                width="14.7%"
                                style={{
                                    position: 'relative',
                                }}
                                className="logo_hover"
                                alt="img"
                            />
                            <PatientTemplateSwitch />

                            <input
                                className="search"
                                type="text"
                                name="search"
                                placeholder="Пошук.."
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
                                alt="img"
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
            </div>
        </>
    )
}

export default Header
