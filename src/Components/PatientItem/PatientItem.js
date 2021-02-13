import app from '../../Firebase/firebase'
import React, { useEffect, useState } from 'react'
import { Item, Name, ButtonItem, Amount, Patient } from './PatientItem.styled'
import { Link } from 'react-router-dom'
import '../PatientInfo/PatientInfoPage.css'
import './PatientItem.css'
function PatientItem({ patients }) {
    console.log(patients)
    return (
        <div className="all_inter">
            {patients.map((patient) => (
                <Item>
                    <img
                        src={patient.Image}
                        width="250"
                        style={{ marginLeft: '0.8rem', marginTop: '0.9rem' }}
                    />

                    <Name>{patient.Name}</Name>
                    <ButtonItem
                        onClick={() =>
                            localStorage.setItem('child', patient.id)
                        }
                    >
                        <Link to="/patient" className="viewmore_patient">
                            Переглянути
                        </Link>
                    </ButtonItem>
                </Item>
            ))}
        </div>
    )
}
export default PatientItem
