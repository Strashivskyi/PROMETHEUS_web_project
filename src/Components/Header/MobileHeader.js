import React from 'react'
import './ProgramHeader.css'
import Logo from '../../assets/Logo.svg'
import SignOut from '../../assets/SignOut.svg'

import app from '../../Firebase/firebase'
function signOut() {
    localStorage.setItem('user', '@gmail')
    app.auth().signOut()
}

function MobileHeader() {
    return (
        <div className="logo_container">
            <img
                src={SignOut}
                onClick={() => signOut()}
                height="100%"
                width="10%"
                className="sign_out_button"
                style={{
                    cursor: 'pointer',
                    position: 'relative',
                    marginLeft: '10%',
                }}
            />
            <img
                src={Logo}
                height="100%"
                width="50%"
                style={{
                    marginLeft: '7%',
                    position: 'relative',
                }}
            />
        </div>
    )
}

export default MobileHeader
