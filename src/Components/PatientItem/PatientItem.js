import React from 'react'
import {Link} from 'react-router-dom'
import '../PatientInfo/PatientInfoPage.css'
import './PatientItem.css'
import './../Authentification/SignIn2.css'

function PatientItem({patients}) {
    console.log(patients)
    return (
        <div>
            {patients.map((patient) => (
                <div className="hover_patient">
                    <Link
                        to="/patient"
                        onClick={() =>
                            localStorage.setItem('child', patient.id)
                        }
                        className="patient_general_link"

                    >
                        <div className="button_container">
                        <img
                                src={patient.Image}
                                width="250"
                                height="240"
                                className="patient_image"
                            />
                            <img
                                src={patient.Image}
                                width="100"
                                height="100"
                                className="patient_image_mobile"
                            />
                        </div>
                        <div className="patient_name text-align-center">
                            {patient.Name}
                        </div>
                        <div className="button_container">
                        <Link
                                to="/patient"
                                className="button-view-patient"
                                onClick={() =>
                                    localStorage.setItem('child', patient.id)
                                }
                            >
                                Переглянути
                            </Link>
                            <Link
                                to="/patient"
                                className="button-view-patient-mobile"
                                onClick={() =>
                                    localStorage.setItem('child', patient.id)
                                }
                            >
                                Переглянути
                            </Link>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default PatientItem
