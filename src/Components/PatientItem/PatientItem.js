import React, {useEffect, useState} from 'react'
import {Item, Name, ButtonItem, Amount, Patient} from './PatientItem.styled'
import {Link} from 'react-router-dom'
import Kid from '../../assets/default_avatar.png'
import '../PatientInfo/PatientInfoPage.css'
import './PatientItem.css'
function PatientItem({patients}) {
    console.log(patients)
    return (
        <div className="all_inter">
            {patients.map((patient) => (
                <Item className="hover_patient" style={{height: '26rem'}}>
                    <Link
                        to="/patient"
                        onClick={() =>
                            localStorage.setItem('child', patient.id)
                        }
                    >
                        <img
                            src={patient.Image}
                            width="250"
                            height="240"
                            style={{marginLeft: '0.8rem', marginTop: '0.9rem'}}
                        />
                    </Link>
                    <Name
                        style={{
                            marginLeft: '-3.8rem',
                            textAlign: 'center',
                            height: '4rem',
                        }}
                    >
                        {patient.Name}
                    </Name>

                    <Link
                        to="/patient"
                        className="viewmore_patient button_item"
                        onClick={() =>
                            localStorage.setItem('child', patient.id)
                        }
                    >
                        Переглянути
                    </Link>
                </Item>
            ))}
        </div>
    )
}
export default PatientItem
