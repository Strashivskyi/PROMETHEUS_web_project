import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import ProtocolItemTherapist from './PageComponent/ProtocolItemTherapist'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import Arrow from '../../assets/arrow.png'
import './ProtocolList.css'
import MobileHeader from '../Header/MobileHeader'
import TreeArrowHeader from '../ArrowHeader/TreeArrowHeader'

export default function ProtocolList() {
    let test = []

    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection("Users")
            .doc(localStorage.getItem('Supervisor'))
            .collection("Supervisors")
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
    protocols.sort((a, b) => +a.ProtocolId - +b.ProtocolId)

    localStorage.setItem('protoID', JSON.stringify(test))

    // const [child, setChild] = useState([0])
    // useEffect(() => {
    //     const db = app.firestore()
    //     const unsubscribe = db
    //         .collection(localStorage.getItem('proffesion'))
    //         .doc(localStorage.getItem('user'))
    //         .collection('Patient')
    //         .where('Name', '==', localStorage.getItem('childName'))
    //         .onSnapshot((snapshot) => {
    //             if (snapshot.size) {
    //                 setChild(
    //                     snapshot.docs.map((doc) => ({
    //                         ...doc.data(),
    //                         id: doc.id,
    //                     }))
    //                 )
    //                 console.log('Сука')
    //             } else {
    //                 console.log('Сука1')
    //             }
    //         })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])
    let protocolsNumber = []
    for (let i = 0; i < protocols.length; i++) {
        protocolsNumber.push(i + 1)
    }
    console.log(protocolsNumber)

    return (
        <>
            <MobileHeader />
            <Header />
            <TreeArrowHeader  page={[localStorage.getItem('childName'),'Програма']}/>

            {protocolsNumber.map((protocol) => (
                <ProtocolItemTherapist
                    number={protocol}
                    protocolId={protocols[protocol - 1].id}
                    protocolName={protocols[protocol - 1].ProtocolId}
                    sphereOfDevelopment={
                        protocols[protocol - 1].SphereOfDevelopment
                    }
                    length={protocols.length}
                    skill={protocols[protocol - 1].Skill}
                    statusCopied={protocols[protocol - 1].StatusCopied}
                    isActive={protocols[protocol - 1].IsActive}
                    interval={protocols[protocol - 1].Interval}
                    correctionProcedureStep1={
                        protocols[protocol - 1].CorrectionProcedureStep1
                    }
                    correctionProcedureStep2={
                        protocols[protocol - 1].CorrectionProcedureStep2
                    }
                    correctionProcedureStep3={
                        protocols[protocol - 1].CorrectionProcedureStep3
                    }
                    criterionIncrease={
                        protocols[protocol - 1].CriterionIncrease
                    }
                    desirableReaction={
                        protocols[protocol - 1].DesirableReaction
                    }
                    method={protocols[protocol - 1].Method}
                    methodTakingHint={protocols[protocol - 1].MethodTakingHint}
                    reductionСriterion={
                        protocols[protocol - 1].ReductionСriterion
                    }
                    stepDescription={protocols[protocol - 1].StepDescription}
                    CriteriongenGenerSkill={
                        protocols[protocol - 1].CriteriongenGenerSkill
                    }
                />
            ))}
        </>
    )
}
