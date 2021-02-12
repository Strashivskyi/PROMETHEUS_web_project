import app from '../../Firebase/firebase'
import PatientItem from '../PatientItem/PatientItem'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import { BsPlusCircle } from 'react-icons/bs'

function Patient() {
    let [patients, setPatients] = useState([])
    const [inputSearch, setInputSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db.collection('Patient').get()
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
                <div className="header">
                    <img
                        src={Logo}
                        onClick={() => app.auth().signOut()}
                        width="14.7%"
                        style={{
                            position: 'relative',
                            left: '4%',
                            marginTop: '1.1%',
                            marginBottom: '-20px',
                        }}
                    />
                    <input
                        className="search"
                        onChange={(e) => setInputSearch(e.target.value)}
                        placeholder="Пошук..."
                    />
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
                            fontSize: '24px',
                        }}
                    >
                        Пацієнти
                    </div>
                    <div
                        style={{
                            marginLeft: '105px',
                            marginTop: '45px',
                            fontSize: '24px',
                        }}
                    >
                        Кількість: {patients.length}
                    </div>
                </div>
                <Link to="/patient_registration">
                    <BsPlusCircle size={50} />
                </Link>
            </div>

            <PatientItem patients={patients} />
        </>
    )
}

export default Patient
