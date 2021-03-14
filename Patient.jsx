import app from '../../Firebase/firebase'
import PatientItem from '../PatientItem/PatientItem'
import React from 'react'
import "./Patients.css"
import MobileHeader from '../Header/MobileHeader'
import { Link } from 'react-router-dom'
import Kid from '../../assets/default_avatar.png'
import { useEffect, useState } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import Logo from '../../assets/Logo.svg'
function signOut() {
    localStorage.setItem('user', 'none')
    app.auth().signOut()
}
function Patient() {
    let [patients, setPatients] = useState([])
    let [user, setUser] = useState([])
    const [inputSearch, setInputSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db
                .collection(localStorage.getItem('proffesion'))
                .doc(localStorage.getItem('user'))
                .collection('Patient')
                .get()
            setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])


    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem('proffesion'))
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setUser(
                        snapshot.docs.filter((u) =>
                        u.id.includes(localStorage.getItem('user'))
                    ).map((doc) => {
                        localStorage.setItem("telegramUserName", (doc.data().TelegramUserID))
                        })
                    )
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
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
               <BranchingItem/>
            </Link>
            <PatientItem patients={patients} />
        </>
    )
}

export default Patient
function BranchingItem(){
    if (localStorage.getItem('proffesion')=='Supervisors'){
        return(
            <>
            <BsPlusCircle size={50} />
            </>
        )
    }
    if (localStorage.getItem('proffesion')!=='Supervisors'){
        return(
            <>
            </>
        )
    }
}