import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Logo.svg'
import './ProgramHeader.css'

import app from '../../Firebase/firebase'

function signOut() {
    localStorage.setItem('user', 'none')
    app.auth().signOut()
}
function ProgramHeader() {
    const [fileGenerated, setFileGenerated] = useState(0)

    let userEmail = localStorage.getItem('user')
    let childName = localStorage.getItem('child')

    const exportUsersToExcel = (userEmail, kidName) => {
        fetch(`/files/${userEmail}/${kidName}`).then((data) => {
            setFileGenerated(data.status) // 200
        })
    }

    return (
        <>
            <div className="header">
                <img
                    src={Logo}
                    onClick={() => signOut()}
                    width="220"
                    style={{
                        position: 'relative',
                        left: '4%',
                        marginTop: '1.1%',
                        marginBottom: '-20px',
                    }}
                />
                <div style={{ position: 'absolute', top: '0.9%', left: '20%' }}>
                    <button
                        className="save_button btn-background-slide"
                        style={{ top: '1rem', cursor: 'pointer' }}
                        onClick={() => exportUsersToExcel(userEmail, childName)}
                    >
                        Зберегти
                    </button>
                </div>
            </div>
            <hr
                style={{
                    border: 'none',
                    borderBottom: ' 1px solid #6F6F6F',
                    position: 'relative',
                    top: '1.5rem',
                    left: '1.7%',
                    width: '93.2%',
                    marginBottom: '2rem',
                    marginRight: '4.5rem',
                }}
            />
        </>
    )
}

export default ProgramHeader
