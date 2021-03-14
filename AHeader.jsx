import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Arrow from '../../../assets/arrow.png'
import Delete from '../../../assets/delete.svg'
import app from '../../../Firebase/firebase'
function AHeader() {
    
    return (
        <>
            <div className="patient_upper_flex_container">
                <h2 style={{ marginLeft: '6rem' }}>
                    <Link to="/" className="patients_link">
                        Пацієнти
                    </Link>
                </h2>
                <img
                    src={Arrow}
                    height="20"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginTop: '28px',
                        color: 'black',
                    }}
                />
                <h2>
                    <Link
                        to="/patient"
                        className="patients_link"
                        style={{ color: '#6F6F6F' }}
                    >
                        {localStorage.getItem('childName')}
                    </Link>
                </h2>
                <img
                    src={Arrow}
                    height="20"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginTop: '28px',
                        color: 'black',
                    }}
                />
                <h2>Програма</h2>
            </div>
        </>
    )
}

export default AHeader
