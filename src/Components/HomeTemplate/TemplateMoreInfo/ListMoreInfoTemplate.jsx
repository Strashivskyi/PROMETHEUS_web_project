import React, { useEffect, useState } from 'react'
import app from '../../../Firebase/firebase'
import  ProtocolItemTemplate from './ProtocolItemTemplate'

import { Link } from 'react-router-dom'
import ArrowHeaderTemplate from './ArrowHeaderTemplate'
import HeaderHomeTemplate from '../../Header/HeaderHomeTemplate'



export default function ListMoreInfoTemplate() {
    let test = []

    const [protocols, setProtocols] = useState([])
    if(localStorage.getItem("templateType")=="private"){
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
        .collection(localStorage.getItem("proffesion"))
        .doc(localStorage.getItem('user'))
        .collection('ProgramTemplates').doc(localStorage.getItem("templateIdMore")).collection('protocols')
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
}
if(localStorage.getItem("templateType")=="public"){
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
      
        .collection('ProgramTemplates').doc(localStorage.getItem("templateIdMore")).collection('protocols')
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
}
   
    protocols.sort((a, b) => +a.ProtocolId - +b.ProtocolId)



    let protocolsNumber = []
    for (let i = 0; i <protocols.length; i++) {
        protocolsNumber.push(i + 1)
    }
    console.log(protocolsNumber)

    return (
        <>
<HeaderHomeTemplate/>
            <ArrowHeaderTemplate/>
            
        
            {protocolsNumber.map((protocol) => (

                        < ProtocolItemTemplate
                            number={protocol}
                            protocolId={protocols[protocol-1].id}
                            protocolName={protocols[protocol-1].ProtocolId}
                            sphereOfDevelopment={protocols[protocol-1].SphereOfDevelopment}
                            length={protocols.length}
                            skill={protocols[protocol-1].Skill}
                            statusCopied={protocols[protocol-1].StatusCopied}
                            isActive={protocols[protocol-1] .IsActive}
                            interval={protocols[protocol-1].Interval}
                            correctionProcedureStep1={
                                protocols[protocol-1].CorrectionProcedureStep1
                            }
                            correctionProcedureStep2={
                                protocols[protocol-1].CorrectionProcedureStep2
                            }
                            correctionProcedureStep3={
                                protocols[protocol-1].CorrectionProcedureStep3
                            }
                            criterionIncrease={protocols[protocol-1].CriterionIncrease}
                            desirableReaction={protocols[protocol-1].DesirableReaction}
                            method={protocols[protocol-1].Method}
                            methodTakingHint={protocols[protocol-1].MethodTakingHint}
                            reductionСriterion={protocols[protocol-1].ReductionСriterion}
                            stepDescription={protocols[protocol-1].StepDescription}
                            CriteriongenGenerSkill={protocols[protocol-1].CriteriongenGenerSkill}
                        />
                    ))}
        </>
    )
}
