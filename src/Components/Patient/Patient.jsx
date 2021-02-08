import app from "../../Firebase/firebase";
import PatientItem from "../PatientItem/PatientItem";
import React from "react";

import { useEffect, useState } from 'react'

import Logo from '../../assets/Logo.svg';
function signOut() {
    localStorage.setItem("user",'none')
    app.auth().signOut()
    
}
function Patient() {
    let [patients, setPatients] = useState([])
    const [inputSearch, setInputSearch] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db.collection("User").doc(localStorage.getItem("user")).collection('Patient').get()
            setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])
    patients = patients.filter(protocol => protocol.Name.includes(inputSearch))

    return (
        <>
            <>
                <div className="header">
                    <img
                        src={Logo}
                        onClick={() => signOut()}
                        width="14.7%"
                        style={{
                            position: 'relative',
                            left: '4%',
                            marginTop: '1.1%',
                            marginBottom: "-20px"
                        }}
                    />
                    <input
                        className="search"
                        onChange={(e) => (setInputSearch(e.target.value))}
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
            <PatientItem patients={patients} />

        </>
    )
}

export default Patient