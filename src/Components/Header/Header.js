import React, { useState } from 'react'
import './ProgramHeader.css'
import './Header.css'
import Logo from '../../assets/Logo.svg';
import app from '../../Firebase/firebase'
import PatientTemplateSwitch from './PatientTemplateSwitch';
function signOut() {
    localStorage.setItem("user", '@gmail')
    app.auth().signOut()

}
function Header() {
    let someText = `&#8203`

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
                            <PatientTemplateSwitch/>


                        <input className="search" type="text" name="search" placeholder=" ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ Пошук.." />
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


export default Header
