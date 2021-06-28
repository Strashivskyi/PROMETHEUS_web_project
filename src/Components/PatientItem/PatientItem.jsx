import React from 'react'
import {Link} from 'react-router-dom'
import '../PatientInfo/PatientInfoPage.css'
import './PatientItem.css'
import './../Authentification/SignIn2.css'

function PatientItem({patients}) {
console.log(patients.keys())
//     let kk = patients["0"].BirthDate
//     console.log(kk)

    return (
        <>
            {patients.map((patient) => (
                <div className="col-md-3 col-sm-4 col-6">
                    <Link
                        to="/patient"
                        onClick={() =>
                            localStorage.setItem('child', patient.id)
                        }
                        className="patient_general_link"

                    >
                            <img
                                src={patient.Image}
                                className="patient_image"
                                alt="kid name"
                            />
                        {/*<p>{patient?.BirthDate}</p>*/}
                        <h5 className="patient_name text-align-center">
                            {patient.Name}
                        </h5>
                            <Link
                                to="/patient"
                                className="button-view-patient text-align-center"
                                onClick={() =>
                                    localStorage.setItem('child', patient.id)
                                }
                            >
                                Переглянути
                            </Link>

                    </Link>
                </div>
            ))}
        </>
    )
}

export default PatientItem