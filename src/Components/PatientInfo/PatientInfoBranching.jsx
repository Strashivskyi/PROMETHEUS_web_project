import React, { useState, useEffect } from 'react'
import PatientInfoTherapist from './PatientInfoTherapist'
import PatientInfoUser from './PatientInfoUser'
import app from '../../Firebase/firebase'
export default function PatientInfoRender() {
    const db = app.firestore()
    console.log(db.collection(localStorage.getItem('proffesion')).doc(localStorage.getItem("user")).get().then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            localStorage.setItem("Name", doc.data().Name)
            localStorage.setItem("Surname", doc.data().Surname)
        }
    }))
    if (localStorage.getItem('proffesion') == 'Supervisors') {
        return <PatientInfoUser />
    } else {
        return <PatientInfoTherapist />
    }
}
