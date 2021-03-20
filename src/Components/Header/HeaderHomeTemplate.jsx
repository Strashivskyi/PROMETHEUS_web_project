import { Link } from 'react-router-dom'
import app from '../../Firebase/firebase'
import React from 'react'
import Logo from '../../assets/Logo.svg'

import PatientTemplateSwitch from "./PatientTemplateSwitch";
function signOut() {
    localStorage.setItem('user', 'none')
    app.auth().signOut()
}
function HeaderHomeTemplate(params) {

    return (
        <>
            <div className="header">
                <div style={{ width: '93.2%', alignSelf: "center" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <img
                            src={Logo}
                            onClick={() => signOut()}
                            width="14.7%"
                            style={{
                                position: 'relative',
                            }}
                        />

                        <PatientTemplateSwitch />


                        <input className="search" type="text" name="search" placeholder="‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎Пошук.." />
                    </div>

                    <h1
                        style={{
                            border: 'none',
                            borderBottom: ' 1px solid #6F6F6F',
                            alignSelf: "center",


                        }}
                    />
                </div>
            </div>
        </>
    )
}
export default HeaderHomeTemplate