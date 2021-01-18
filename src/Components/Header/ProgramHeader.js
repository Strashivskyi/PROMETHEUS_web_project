import React from 'react'
import { HeaderSection } from './Header.styled'
import Logo from '../../assets/Logo.svg'
import './ProgramHeader.css'
import app from '../../Firebase/firebase'

function ProgramHeader() {
    return (
        <>
            <HeaderSection>
                <div style={{ display: 'flex' }}>
                    <img
                        src={Logo}
                        onClick={() => app.auth().signOut()}
                        width="250"
                        style={{ marginLeft: '3.2rem', marginTop: '0.5rem' }}
                    />
                    <div style={{ marginTop: '27px', marginBottom: '27px' }}>
                        <button className="save_button" style={{ top: '1rem' }}>
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
