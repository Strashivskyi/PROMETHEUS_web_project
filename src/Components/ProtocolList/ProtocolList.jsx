import './ProtocolList.css'
import React, { useEffect, useState } from 'react'
import app from '../../Firebase/firebase'
import ProtocolItem from './PageComponent/ProtocolItem'
import Header from '../Header/Header'
import ArrowHeader from './PageComponent/ArrowHeader'
import { ReactSortable } from "react-sortablejs";

export default function ProtocolList() {
    let test = []

    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection('User')
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
                    console.log('Сука')
                } else {
                    console.log('Сука1')
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
            .collection('User')
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
            <Header />
            <ArrowHeader />
            <button onClick={() => CreateProgramTemplates(protocols, child[0])}>
                CreateProgramTemplates
            </button>
            {/* <ReactSortable list={protocols} setList={setProtocols}> */}
            {protocols
                .sort((a, b) => +a.ProtocolId - +b.ProtocolId)
                .map((protocol) => (
                    <ProtocolItem
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
            {/* </ReactSortable> */}

        </>
    )
}

function CreateProgramTemplates(protocols, child) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('ProgramTemplates')
        .add({
            Age: child.Age,
            Diagnos: child.Diagnos,
            KidWeight: child.KidWeight,
        })

        .then(function (docRef) {
            protocols.map((protocol) =>
                db
                    .collection('User')
                    .doc(localStorage.getItem('user'))
                    .collection('ProgramTemplates')
                    .doc(docRef.id)
                    .collection('protocols')
                    .add(protocol)
            )
        })
        .catch(function (error) {
            console.error('Error adding document: ', error)
        })
}
