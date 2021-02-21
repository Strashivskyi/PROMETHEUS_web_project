import app from '../../Firebase/firebase'
import PatientItem from '../PatientItem/PatientItem'
import React from 'react'
import "./Patients.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import Logo from '../../assets/Logo.svg'
import MobileHeader from '../Header/MobileHeader'
function signOut() {
    localStorage.setItem('user', 'none')
    app.auth().signOut()
}
function Patient() {
    let [patients, setPatients] = useState([])
    const [inputSearch, setInputSearch] = useState('')

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
    patients = patients.filter((protocol) =>
        protocol.Name.includes(inputSearch)
    )

    return (
        <>
            <>
                <MobileHeader/>
                <div className="header">
                    <img
                        src={Logo}
                        onClick={() => signOut()}
                        width="14.7%"
                        style={{
                            position: 'relative',
                            left: '4%',
                            marginTop: '1.1%',
                            marginBottom: '-20px',
                        }}
                    />
                    <input className="search" onChange={(e) => (setInputSearch(e.target.value))} type="text" name="search" placeholder="Пошук.."/>
                    <h1
                        style={{
                            border: 'none',
                            borderBottom: ' 1px solid #6F6F6F',
                            position: 'relative',
                            top: '8.2%',
                            left: '3.33%',
                            width: '93.2%',
                        }}
                    />
                </div>
            </>
            <div className="info_title">
                <div className="inter_fing">
                    <div
                        style={{
                            marginLeft: '105px',
                            marginTop: '45px',
                            fontSize: '25px',
                            color: '#6F6F6F',
                            fontWeight: '700'
                        }}
                    >
                        Пацієнти
                    </div>
                    <div
                        style={{
                            marginLeft: '105px',
                            marginTop: '40px',
                            marginBottom: '20px',

                            fontSize: '20px',
                            color: "#48535f"
                        }}
                    >
                        Кількість: {patients.length}
                    </div>
                </div>
            </div>

            <Link
                to="/patient_registration"
                style={{
                    position: 'absolute',
                    top: '11.5rem',
                    right: '10rem',
                    color: 'grey',
                }}
                className="add_patient_button"
            >
                <BsPlusCircle size={50} />
            </Link>
            <PatientItem patients={patients} />
        </>
    )
}

export default Patient
