import React, { useEffect, useState } from 'react'
import app from '../../Firebase/firebase'
import './PatientInfoPage.css'
import Header from '../Header/Header'
import Arrow from '../../assets/arrow.png'
import Kid from '../../assets/kid.jpg'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg';
import SignOut from '../../assets/SignOut.svg';

function signOut() {
    localStorage.setItem("user", '@gmail')
    app.auth().signOut()

}
function PatientInfoPage() {
    let [patients, setPatients] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db
                .collection('User')
                .doc(localStorage.getItem('user'))
                .collection('Patient')
                .get()
            setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])

    patients = patients.filter((patient) =>
        patient.id.includes(localStorage.getItem('child'))
    )
    localStorage.setItem('childName', '')
    console.log(patients)

    let path = '/protocol-list'

    const [protocols, setProtocols] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection('User')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocols(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )

                    console.log('Сука ')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])
    if (protocols.length == 0) {
        path = '/program-template'
    } else {
        path = '/protocol-list'
    }

    return (
        <>
            <div className="logo_container">
                <img
                    src={SignOut}
                    onClick={() => signOut()}
                    height="100%"
                    width="11%"
                    className="sign_out_button"
                    style={{
                        cursor: 'pointer',
                        position: 'relative',
                        marginLeft: '10%'
                    }}
                />
                <img
                    src={Logo}
                    height="160%"
                    width="48%"
                    style={{
                        marginLeft: '7%',
                        position: 'relative',
                    }}
                />
            </div>
            <Header />
            <div className="grey_back">
                <ul>
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
                                <h2 className="patients_link" style={{ color: '#6F6F6F' }}>{patient.Name}</h2>
                            </div>
                            <div className="patient_grid_container">

                                <img height="270" src={patient.Image} className="child_image" />
                                <img height="200" src={patient.Image} className="mobile_child_image" />
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
                                </div>
                                {/* second column */}
                                <div className="second_column_outer_flex_container">
                                    <div
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
                                    to={path}
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
export default PatientInfoPage