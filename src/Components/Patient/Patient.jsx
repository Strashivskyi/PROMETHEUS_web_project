import app from '../../Firebase/firebase'
import PatientItem from '../PatientItem/PatientItem'
import React from 'react'
import HeaderHomeTemplate from '../Header/HeaderHomeTemplate'
import './Patients.css'
import MobileHeader from '../Header/MobileHeader'
import SupervisorTherapistNav from './SupervisorTherapistNav'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {BsPlusCircle} from 'react-icons/bs'
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
            setPatients(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
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
                        snapshot.docs
                            .filter((u) =>
                                u.id.includes(localStorage.getItem('user'))
                            )
                            .map((doc) => {
                                localStorage.setItem(
                                    'telegramUserName',
                                    doc.data().TelegramUserID
                                )
                            })
                    )
                } else {
                    console.log('HappyEaster')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])
    localStorage.setItem('templateType', 'private')
    localStorage.setItem('homeType', 'home')

    patients = patients.filter((protocol) =>
        protocol.Name.includes(inputSearch)
    )

    return (
        <div className="container">
            <MobileHeader className="row" />
            <HeaderHomeTemplate className="row" />

            <div className="row">
                <div className="col-3" />
                <SupervisorTherapistNav className="col-4 col-md-6 row" />
                <div className="col-1 col-md-2" />
                <Link
                    to="/patient_registration"
                    className="col-2 col-md-1 place_right_horizontal"
                >
                    <BranchingItem />
                </Link>
            </div>
            <div className="row">
                <div className="col-6 patient_number">
                    Кількість пацієнтів: {patients.length}
                </div>
            </div>
            <PatientItem patients={patients} />
        </div>
    )
}

export default Patient
function BranchingItem() {
    if (localStorage.getItem('proffesion') == 'Supervisors') {
        return (
            <>
                <BsPlusCircle size={50} className="plus_button" />
            </>
        )
    }
    if (localStorage.getItem('proffesion') !== 'Supervisors') {
        return <></>
    }
}
