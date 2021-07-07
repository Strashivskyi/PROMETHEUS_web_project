import './ProtocolList.css'
import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import ProtocolItem from './PageComponent/ProtocolItem'
import Header from '../Header/Header'
import ArrowHeader from './PageComponent/ArrowHeader'
import Popup from '../ModalWindow/Popup'
import MobileHeader from '../Header/MobileHeader'
import {BsPlusCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import TreeArrowHeader from '../ArrowHeader/TreeArrowHeader'

export default function ProtocolList() {
    let test = []

    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection('Users')
            .doc(localStorage.getItem('user'))
            .collection(localStorage.getItem('proffesion'))
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

    // useEffect(() => {
    //     const db = app.firestore()
    //     var test=1
    //     const unsubscribe = db
    //         .collection(localStorage.getItem("proffesion"))
    //         .doc(localStorage.getItem('user'))
    //         .collection('Patient')
    //         .doc(localStorage.getItem('child'))
    //         .collection('Protocols')
    //         .onSnapshot((snapshot) => {
    //             if (snapshot.size) {
    //                 setProtocols(
    //                     snapshot.docs.sort((a, b) => +a.data().ProtocolId - +b.data().ProtocolId).map((doc) => {
    //                         db.collection(localStorage.getItem("proffesion"))
    //                         .doc(localStorage.getItem('user'))
    //                         .collection('Patient')
    //                         .doc(localStorage.getItem('child'))
    //                         .collection('Protocols').doc(doc.data().id)
    //                         .update({ ProtocolId: test })
    //                         test+=1
    //                         console.log("СУКАААААААААААА_1"+ test)
    //                     })

    //                 )
    //                 console.log('Сука')
    //                 // for (let i = 0; i < protocols.length; i++) {
    //                 //     console.log("ПІЗДААААА  " + i+1 + "БЛЯДСЬКИЙ ПРІОР " + protocols[i].ProtocolId)
    //                 //     db.collection(localStorage.getItem("proffesion"))
    //                 //         .doc(localStorage.getItem('user'))
    //                 //         .collection('Patient')
    //                 //         .doc(localStorage.getItem('child'))
    //                 //         .collection('Protocols').doc(protocols[i].id)
    //                 //         .update({ ProtocolId: i + 1 })

    //                 // }

    //             } else {
    //                 console.log('Сука1')
    //             }
    //         })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])

    protocols.map((protocol) => test.push(protocol.id))
    console.log(test)

    localStorage.setItem('protoID', JSON.stringify(test))

    const [child, setChild] = useState([0])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection('Users')
            .doc(localStorage.getItem('user'))
            .collection(localStorage.getItem('proffesion'))
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

        // fetch(`https://john-steck-api.herokuapp.com/priority_correction/priority_correction/${localStorage.getItem('user')}/${localStorage.getItem('child')}`).then((data) => {
    

    protocols.sort((a, b) => +a.ProtocolId - +b.ProtocolId)

    let protocolsNumber = []
    for (let i = 0; i < protocols.length; i++) {
        protocolsNumber.push(i + 1)
    }
    console.log(protocolsNumber)
    return (
        <>
            <MobileHeader />
            <Header />
            <div class="container">
                <div class="row top-tree ">
                    <TreeArrowHeader
                        page={[localStorage.getItem('childName'),'Програма']}
                        class="tree-arrow-header col-md-5 row "
                    />
                    <div className="col-1 col-md-2"></div>
                    <Link
                        to="/vb-mapp"
                        class="link-protocol create_template_button_t btn-background-slide col-10 col-md-4 row "
                    >
                        Редагувати програму
                        {/* <button
                            class="create_template_button btn-background-slide col-md-3"
                            // onClick={togglePopup}
                        ></button> */}
                    </Link>
                </div>
                <div className="create_element">
                    {/* <ReactSortable list={protocols} setList={setProtocols}> */}
                    {protocolsNumber.map((protocol) => (
                        <>
                            <div
                            // draggable="true"
                            // onDragStart={(event) => {
                            //     dragStartHandler(event, protocols[protocol - 1])
                            // }}
                            // onDragLeave={(event) => {
                            //     dragEndHandler(event, protocols[protocol - 1])
                            // }}
                            // onDragEnd={(event) => {
                            //     dragEndHandler(event, protocols[protocol - 1])
                            // }}
                            // onDragOver={(event) => {
                            //     dragOverHandler(event)
                            // }}
                            // onDrop={(event) => {
                            //     dropHandler(event, protocols[protocol - 1])
                            // }}
                            >
                                <ProtocolItem
                                    protocols={protocols}
                                    number={protocol}
                                    protocolId={protocols[protocol - 1].id}
                                    protocolName={
                                        protocols[protocol - 1].ProtocolId
                                    }
                                    sphereOfDevelopment={
                                        protocols[protocol - 1]
                                            .SphereOfDevelopment
                                    }
                                    length={protocols.length}
                                    skill={protocols[protocol - 1].Skill}
                                    statusCopied={
                                        protocols[protocol - 1].StatusCopied
                                    }
                                    isActive={protocols[protocol - 1].IsActive}
                                    interval={protocols[protocol - 1].Interval}
                                    correctionProcedureStep1={
                                        protocols[protocol - 1]
                                            .CorrectionProcedureStep1
                                    }
                                    correctionProcedureStep2={
                                        protocols[protocol - 1]
                                            .CorrectionProcedureStep2
                                    }
                                    correctionProcedureStep3={
                                        protocols[protocol - 1]
                                            .CorrectionProcedureStep3
                                    }
                                    criterionIncrease={
                                        protocols[protocol - 1]
                                            .CriterionIncrease
                                    }
                                    desirableReaction={
                                        protocols[protocol - 1]
                                            .DesirableReaction
                                    }
                                    method={protocols[protocol - 1].Method}
                                    methodTakingHint={
                                        protocols[protocol - 1].MethodTakingHint
                                    }
                                    reductionСriterion={
                                        protocols[protocol - 1]
                                            .ReductionСriterion
                                    }
                                    stepDescription={
                                        protocols[protocol - 1].StepDescription
                                    }
                                    CriteriongenGenerSkill={
                                        protocols[protocol - 1]
                                            .CriteriongenGenerSkill
                                    }
                                    instruction1={
                                        protocols[protocol - 1].Instructions1
                                    }
                                    instruction2={
                                        protocols[protocol - 1].Instructions2
                                    }
                                    instruction3={
                                        protocols[protocol - 1].Instructions3
                                    }
                                />
                            </div>
                        </>
                    ))}
                    {/* </ReactSortable> */}
                </div>
            </div>
        </>
    )
}

function addProto(length) {
    const db = app.firestore()
    console.log('QQQQQQQQQQQQQQQQQQQQQQ')
    db.collection('Users')
        .doc(localStorage.getItem('user'))
        .collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .add({
            ProtocolId: +length + 1,
            SphereOfDevelopment: '',
            Skill: '',
            IsActive: '',
            Interval: '',
            CorrectionProcedureStep1: '',
            CorrectionProcedureStep2: '',
            CorrectionProcedureStep3: '',
            CriterionIncrease: '',
            DesirableReaction: '',
            Method: '',
            MethodTakingHint: '',
            ReductionСriterion: '',
            StepDescription: '',
            CriteriongenGenerSkill: '',
        })

    // console.log(data.key)
}
