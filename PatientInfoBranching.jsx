import React, { useState, useEffect } from 'react'
import PatientInfoTherapist from './PatientInfoTherapist'
import PatientInfoUser from './PatientInfoUser'

export default function PatientInfoRender() {
    if (localStorage.getItem('proffesion') == 'Supervisors') {
        return <PatientInfoUser />
    } else {
        return <PatientInfoTherapist />
    }
}
