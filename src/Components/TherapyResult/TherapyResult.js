import React from 'react'
import Header from '../Header/Header'
import './TherapyResult.css'
import Arrow from '../../assets/arrow.png'
import { Link, useHistory } from 'react-router-dom'
import PaginationRounded from './Pagination'
import MobileHeader from '../Header/MobileHeader'
const TherapyResult = () => {
    var history = useHistory()

    return (
        <>
        <MobileHeader/>
            <Header />
            <div
                className="patient_upper_flex_container"
                style={{ marginTop: '10px' }}
            >
                <h2 style={{ marginLeft: '100px' }}>
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
                <h2 ><Link to="/patient" className="patients_link" >{localStorage.getItem("childName")}</Link></h2>
                <img src={Arrow} height="20" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "28px", color: "black" }} />
                <h2 ><Link style={{ color: "#666666", cursor: "default" }} className="patients_link" to="/protocol-list">Результати терапії</Link></h2>
            </div>
            <div className="container">
                <p class="choose-file-title">
                    Натисніть на файл, щоб завантажити його
                </p>
                <br />
                <br />
                <PaginationRounded />
            </div>
        </>
    )
}

export default TherapyResult
