import React, { useEffect, useState } from 'react'
import app from '../../Firebase/firebase'
import ProtocolItemTherapist from './PageComponent/ProtocolItemTherapist'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/arrow.png'
import './ProtocolList.css'
import MobileHeader from '../Header/MobileHeader'

export default function ProtocolList() {
    let test = []

    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocols(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                    console.log('yeah')
                } else {
                    console.log(
                        'error in ProtocolList/ProtocolListTherapist.js'
                    )
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])
    protocols.map((protocol) => test.push(protocol.id))
    console.log(test)

    localStorage.setItem('protoID', JSON.stringify(test))

    const [child, setChild] = useState([0])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .where('Name', '==', localStorage.getItem('childName'))
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setChild(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                    console.log('Сука')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            <MobileHeader/>
            <Header />
            <div className="patient_upper_flex_container">
                <h2 style={{ marginLeft: '6rem' }}>
                    <Link to="/" className="patients_link">
                        Пацієнти
                    </Link>
                </h2>
                <img
                    src={Arrow}
                    height="20"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginTop: '28px',
                        color: 'black',
                    }}
                />
                <h2>
                    <Link
                        to="/patient"
                        className="patients_link"
                        style={{ color: '#6F6F6F' }}
                    >
                        {localStorage.getItem('childName')}
                    </Link>
                </h2>
                <img
                    src={Arrow}
                    height="20"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginTop: '28px',
                        color: 'black',
                    }}
                />
                <h2>Програма</h2>
            </div>

            {protocols
                .sort((a, b) => +a.ProtocolId - +b.ProtocolId)
                .map((protocol) => (
                    <ProtocolItemTherapist
                        protocolId={protocol.id}
                        protocolName={protocol.ProtocolId}
                        sphereOfDevelopment={protocol.SphereOfDevelopment}
                        length={protocols.length}
                        skill={protocol.Skill}
                        statusCopied={protocol.StatusCopied}
                        isActive={protocol.IsActive}
                        interval={protocol.Interval}
                        correctionProcedureStep1={
                            protocol.CorrectionProcedureStep1
                        }
                        correctionProcedureStep2={
                            protocol.CorrectionProcedureStep2
                        }
                        correctionProcedureStep3={
                            protocol.CorrectionProcedureStep3
                        }
                        criterionIncrease={protocol.CriterionIncrease}
                        desirableReaction={protocol.DesirableReaction}
                        method={protocol.Method}
                        methodTakingHint={protocol.MethodTakingHint}
                        reductionСriterion={protocol.ReductionСriterion}
                        stepDescription={protocol.StepDescription}
                    />
                ))}
        </>
    )
}
