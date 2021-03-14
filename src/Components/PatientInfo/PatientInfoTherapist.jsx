import React, { useEffect, useState } from 'react'
import app from '../../Firebase/firebase'
import './PatientInfoPage.css'
import Header from '../Header/Header'
import MobileHeader from '../Header/MobileHeader'

import Arrow from '../../assets/arrow.png'
import Kid from '../../assets/default_avatar.png'
import { Link } from 'react-router-dom'
import Delete from '../../assets/delete.svg'

export default function PatientInfoTherapist() {
    let [patients, setPatients] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db
                .collection('Therapists')
                .doc(localStorage.getItem('user'))
                .collection('Patient')
                .get()
            setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])

    patients = patients.filter(
        (patient) => patient.id == localStorage.getItem('child')
    )
    localStorage.setItem('childName', '')
    console.log(patients)


    return (
        <>
            <MobileHeader />
            <Header />
            <div >
            {/* className="grey_back" */}
            <ul >
                {patients.map((patient) => (
                    <>
                        {localStorage.setItem('childName', patient.Name)}

                        <div className="patient_upper_flex_container">
                            <h2 style={{ marginLeft: '4rem' }}>
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
                            <h2
                                className="patients_link"
                                style={{ color: '#6F6F6F' }}
                            >
                                {patient.Name}
                            </h2>
                        </div>
                        <div className="patient_grid_container">

                            <img
                                src={Kid}
                                height="200"
                                className="mobile_child_image"
                            />
                            <img
                                src={Kid}
                                height="270"
                                className="child_image"
                            />
                            <div className="column_outer_flex_container">
                                <div className="kid_name">{patient.Name} </div>
                                <div className="diagnosis_flex_container">
                                    <h7 className="">
                                        Діагноз: &nbsp;&nbsp;&nbsp;&nbsp;
                                    </h7>
                                    <div style={{ color: '#6F6F6F' }}>
                                        {patient.Diagnos}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Батьки:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.Parents}
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Стать:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.Gender}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Вік:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.Age} років
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Дата народження:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.BirthDate}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Місто:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.City}
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Країна:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.Country}
                                    </div>
                                </div>
                                {/* <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Вага:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.KidWeight} кг
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Зріст:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.KidHeight} см
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Група крові:</div>
                                    <div className="zebra_rows_flex_container_value">
                                        {patient.BloodType}
                                    </div>
                                </div> */}
                            </div> 
                        
                            <div className="second_column_outer_flex_container">
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    {/* <div>Терапевти:</div>
                                    <div>
                                        
                                        {therapists
                                            .sort((a, b) => +a.id - +b.id)
                                            .map((therapist) => (
                                                <>
                                                    <div
                                                        style={{
                                                            fontSize: '20px',
                                                            display: 'flex',
                                                            flexDirection:
                                                                'row',
                                                            justifyContent:
                                                                'space-between',
                                                        }}
                                                    >
                                                        <div>
                                                            {therapist.Name}
                                                            <div
                                                                className="zebra_rows_flex_container_value"
                                                                style={{
                                                                    marginTop:
                                                                        '-20px',
                                                                }}
                                                            >
                                                                ({therapist.id})
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                    </div> */}

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            marginLeft: '2rem',
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="patient_page_buttons">
                            <Link
                                to={{
                                    pathname: '/patient/result_of_therapy',
                                    myCustomProps: { patient },
                                }}
                                className="patient_page_buttons_therapy"
                            >
                                Результати терапії
                            </Link>
                            <Link
                                to={'/protocol-list'}
                                onClick={() =>
                                    localStorage.setItem('program', 'ok')
                                }
                                className="patient_page_buttons_program"
                            >
                                Програма
                            </Link>
                        </div>
                    </>
                ))}
            </ul>
            </div>
        </>
    )
}

