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
    const [inputSearch, setInputSearch] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()
            const data = await db
                .collection("Users")
                .doc(localStorage.getItem('user'))
                .collection(localStorage.getItem('proffesion'))
                .get()
            setPatients(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        fetchData()
    }, [])

    localStorage.setItem('templateType', 'private')
    localStorage.setItem('homeType', 'home')

 

    return (
        <div className="container">
            <HeaderHomeTemplate className="row" />
            <MobileHeader/>

            <div className="row">
                <div className="col-3" />
                <SupervisorTherapistNav className="col-4 col-md-6 row" />
                <div className="col-1 col-md-2" />
             
                    <BranchingItem />
                
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
               <Link
                    to="/patient_registration"
                    className="col-2 col-md-1 place_right_horizontal"
                >
                <BsPlusCircle size={50} className="plus_button" />
                </Link>
            </>
        )
    }
    if (localStorage.getItem('proffesion') !== 'Supervisors') {
        return <></>
    }
}
