import React, {useState, useEffect} from 'react'
import Logo from '../../assets/Logo.svg'
import './ProgramHeader.css'
import {Link} from 'react-router-dom'
import app from '../../Firebase/firebase'
import PatientTemplateSwitch from './PatientTemplateSwitch'

function signOut() {
    localStorage.setItem('user', 'none')
    app.auth().signOut()
}
function ProgramHeader() {
    const [fileGenerated, setFileGenerated] = useState(0)

    let userEmail = localStorage.getItem('user')
    let childName = localStorage.getItem('child')

    const exportUsersToExcel = (userEmail, kidName) => {
        const db = app.firestore()
        db.collection("Users")
        .doc(localStorage.getItem('user'))
        .collection('Supervisors')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .doc(localStorage.getItem('program'))
            .update({Instructions1:  localStorage.getItem("Instructions1")})
            db.collection("Users")
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
                .doc(localStorage.getItem('child'))
                .collection('Protocols')
                .doc(localStorage.getItem('program'))
                .update({Instructions2: localStorage.getItem("Instructions2")})
            db.collection("Users")
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
                .doc(localStorage.getItem('child'))
                .collection('Protocols')
                .doc(localStorage.getItem('program'))
                .update({Instructions3:  localStorage.getItem("Instructions3")})
        
            db.collection("Users")
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
                .doc(localStorage.getItem('child'))
                .collection('Protocols')
                .doc(localStorage.getItem('program'))
                .update({Skill: localStorage.getItem("Skill")})

                db.collection("Users")
                .doc(localStorage.getItem('user'))
                .collection('Supervisors')
                    .doc(localStorage.getItem('child'))
                    .collection('Protocols')
                    .doc(localStorage.getItem('program'))
                    .update({Method: localStorage.getItem("Method")})
                db.collection("Users")
                .doc(localStorage.getItem('user'))
                .collection('Supervisors')
                    .doc(localStorage.getItem('child'))
                    .collection('Protocols')
                    .doc(localStorage.getItem('program'))
                    .update({DesirableReaction:  localStorage.getItem("DesirableReaction")})
                db.collection("Users")
                .doc(localStorage.getItem('user'))
                .collection('Supervisors')
                    .doc(localStorage.getItem('child'))
                    .collection('Protocols')
                    .doc(localStorage.getItem('program'))
                    .update({ReductionСriterion: localStorage.getItem("ReductionСriterion")})
                    db.collection("Users")
                    .doc(localStorage.getItem('user'))
                    .collection('Supervisors')
                        .doc(localStorage.getItem('child'))
                        .collection('Protocols')
                        .doc(localStorage.getItem('program'))
                        .update({CriterionIncrease: localStorage.getItem("CriterionIncrease")})
                    db.collection("Users")
                    .doc(localStorage.getItem('user'))
                    .collection('Supervisors')
                        .doc(localStorage.getItem('child'))
                        .collection('Protocols')
                        .doc(localStorage.getItem('program'))
                        .update({StepDescription: localStorage.getItem("StepDescription")})
                        db.collection("Users")
                        .doc(localStorage.getItem('user'))
                        .collection('Supervisors')
                            .doc(localStorage.getItem('child'))
                            .collection('Protocols')
                            .doc(localStorage.getItem('program'))
                            .update({CorrectionProcedureStep1: localStorage.getItem("CorrectionProcedureStep1")})
                        db.collection("Users")
                        .doc(localStorage.getItem('user'))
                        .collection('Supervisors')
                            .doc(localStorage.getItem('child'))
                            .collection('Protocols')
                            .doc(localStorage.getItem('program'))
                            .update({SphereOfDevelopment: localStorage.getItem("SphereOfDevelopment")})
                          
                        db.collection("Users")
                        .doc(localStorage.getItem('user'))
                        .collection('Supervisors')
                            .doc(localStorage.getItem('child'))
                            .collection('Protocols')
                            .doc(localStorage.getItem('program'))
                            .update({Interval: localStorage.getItem("Interval")})
                        db.collection("Users")
                        .doc(localStorage.getItem('user'))
                        .collection('Supervisors')
                            .doc(localStorage.getItem('child'))
                            .collection('Protocols')
                            .doc(localStorage.getItem('program'))
                            .update({MethodTakingHint: localStorage.getItem("MethodTakingHint")})
                        db.collection("Users")
                        .doc(localStorage.getItem('user'))
                        .collection('Supervisors')
                            .doc(localStorage.getItem('child'))
                            .collection('Protocols')
                            .doc(localStorage.getItem('program'))
                            .update({CriteriongenGenerSkill: localStorage.getItem("CriteriongenGenerSkill")})
        console.log(
            fetch(
                `https://john-steck-api.herokuapp.com/files/${userEmail}/${kidName}`
            )
        )
        fetch(
            `https://john-steck-api.herokuapp.com/files/${userEmail}/${kidName}`
        ).then((data) => {
            setFileGenerated(data.status) // 200
        })
        alert('Протокол збережено успішно!')
    }
    return (
        <>
            <div className="header">
                <div style={{width: '93.2%', alignSelf: 'center'}}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <img
                            src={Logo}
                            onClick={() => signOut()}
                            width="14.7%"
                            style={{
                                position: 'relative',
                            }}
                            className="ionkid_logo"
                        />
                        <PatientTemplateSwitch />
                        <Link to="/protocol-list">
                            <button
                                type="submit"
                                className="save_button_header btn-background-slide"
                                style={{top: '1rem', cursor: 'pointer'}}
                                onClick={() =>
                                    exportUsersToExcel(userEmail, childName)
                                }
                            >
                                Зберегти файл
                            </button>
                        </Link>
                    </div>

                    <h1
                        style={{
                            border: 'none',
                            borderBottom: ' 1px solid #6F6F6F',
                            alignSelf: 'center',
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default ProgramHeader
