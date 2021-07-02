import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import './PatientInfoPage.css'
import Header from '../Header/Header'
import MobileHeader from '../Header/MobileHeader'
import ArrowHeader from '../ArrowHeader/Arrow'
import {Link} from 'react-router-dom'

export default function PatientInfoTherapist() {
    let [patients, setPatients] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db
                .collection('Users')
                .doc(localStorage.getItem('user'))
                .collection('Therapists')
                .get()
            setPatients(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
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
            <div>
                {/* className="grey_back" */}
                <ul>
                    {patients.map((patient) => (
                        <>
                            {localStorage.setItem('childName', patient.Name)}

                            <ArrowHeader patient={patient} />


                            <div className="patient_grid_container">
                                <div className="center_mob_image">
                                    <img
                                        src={patient.Image}
                                        height="200"
                                        className="mobile_child_image"
                                        alt="img"
                                    />
                                </div>
                                <img
                                    src={patient.Image}
                                    height="270"
                                    className="child_image"
                                    alt="img"
                                />
                                <div className="column_outer_flex_container">
                                    <div className="kid_name">
                                        {patient.Name}
                                    </div>
                                    <div className="diagnosis_flex_container">
                                        <p className="">Діагноз:&nbsp;</p>
                                        <p style={{color: '#6F6F6F'}}>
                                            {patient.Diagnos}
                                        </p>
                                    </div>
                                    <div
                                        className="zebra_rows_flex_container"
                                        style={{backgroundColor: '#EEEEEE'}}
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
                                        style={{backgroundColor: '#EEEEEE'}}
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
                                        style={{backgroundColor: '#EEEEEE'}}
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
                                <br />
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
                                        myCustomProps: {patient},
                                    }}
                                    className="patient_page_buttons_therapy btn_centering"
                                >
                                    Результати терапії
                                </Link>
                                <Link
                                    to={'/protocol-list'}
                                    onClick={() =>
                                        localStorage.setItem('program', 'ok')
                                    }
                                    className="patient_page_buttons_program btn_centering"
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
