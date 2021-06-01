import React from 'react'
import './ProgramHeader.css'
import Logo from '../../assets/Logo.svg'
import app from '../../Firebase/firebase'

function SimpleHeader() {
    return (
        <>
            <div className="header" style={{ margin: '10px' }}>
                <img
                    src={Logo}
                    onClick={() => app.auth().signOut()}
                    width="14.7%"
                    style={{
                        position: 'relative',
                        left: '4%',
                        marginTop: '1.1%',
                        marginBottom: '-20px',
                    }}
                />

                <hr
                    style={{
                        border: 'none',
                        borderBottom: ' 1px solid #6F6F6F',
                        position: 'relative',
                        margin: '2%',
                    }}
                />
            </div>
        </>
    )
}

export default SimpleHeader
