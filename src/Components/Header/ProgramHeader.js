import React from 'react'
import { HeaderSection } from './Header.styled'
import Logo from '../../assets/Logo.svg'
import './ProgramHeader.css'
import app from '../../Firebase/firebase'
function signOut() {
    localStorage.setItem("user",'none')
    app.auth().signOut()
    
}
function ProgramHeader() {

    return (
        <>
            <HeaderSection>
                <div style={{ display: 'flex' }}>
                    <img
                        src={Logo}
                        onClick={() =>signOut()}
                        width="220"
                        style={{ marginLeft: '3.4rem', marginTop: '0.4rem' }}
                    />
                    <div style={{ marginTop: '40px', marginBottom: '15px' }}>
                        <button className="save_button" style={{ top: '1rem' , cursor: "pointer"}}>
                            Зберегти
                        </button>
                    </div>
                </div>
                <hr
                    style={{
                        marginLeft: '4rem',
                    }}
                />
            </HeaderSection>
        </>
    )
}

export default ProgramHeader
