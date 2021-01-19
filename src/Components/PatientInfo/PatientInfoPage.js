import React, { useEffect, useState } from 'react'
import app from '../../Firebase/firebase'
import './PatientInfoPage.css'
import Header from '../Header/Header'
import Arrow from '../../assets/arrow.png'
import Kid from '../../assets/kid.jpg'
import { Link } from 'react-router-dom'

function PatientInfoPage() {
    let [patients, setPatients] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db.collection('Patient').get()
            setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])

    patients = patients.filter((patient) =>
        patient.id.includes(localStorage.getItem('child'))
    )
    localStorage.setItem('childName', '')
    console.log(patients)

    return (
        <>
             <Header/>
            <ul>
                {patients.map((patient) => (
                    <>
                        {localStorage.setItem('childName', patient.Name)}

                        <div className="patient_upper_flex_container">
                            <h2 style={{ marginLeft: '4rem'}}>
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
                            <h2 style={{ color: '#6F6F6F' }}>{patient.Name}</h2>
                        </div>
                        <div className="patient_grid_container">
                            <img src={Kid} height="270" />
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
                                    <div className="zebra_rows_parents_data">
                                        {patient.Parents}
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Стать:</div>
                                    <div className="zebra_rows_gender_data">
                                        {patient.Gender}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Вік:</div>
                                    <div className="zebra_rows_age_data">
                                        {patient.Age} років
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Дата народження:</div>
                                    <div className="zebra_rows_birthday_data">
                                        {patient.BirthDate}
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Місто:</div>
                                    <div className="zebra_rows_town_data">
                                        {patient.City}
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Країна:</div>
                                    <div className="zebra_rows_country_data">
                                        {patient.Country}
                                    </div>
                                </div>
                            </div>
                            {/* second column */}
                            <div className="second_column_outer_flex_container">
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Вага:</div>
                                    <div className="zebra_rows_weight_data">
                                        {patient.KidWeight} кг
                                    </div>
                                </div>
                                <div className="zebra_rows_flex_container">
                                    <div>Зріст:</div>
                                    <div className="zebra_rows_height_data">
                                        {patient.KidHeight} см
                                    </div>
                                </div>
                                <div
                                    className="zebra_rows_flex_container"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    <div>Група крові:</div>
                                    <div className="zebra_rows_blood_data">
                                        {patient.BloodType}
                                    </div>
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
                                onClick={() =>
                                    localStorage.setItem(
                                        'telegramUserName',
                                        patient.TelegramUserName
                                    )
                                }
                            >
                                Результати терапії
                            </Link>
                            <Link
                                to="/protocol-list"
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
        </>
    )
}
export default PatientInfoPage
