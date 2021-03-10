import './ProtocolList.css'
import React, { useEffect, useState } from 'react'
import app from '../../Firebase/firebase'
import ProtocolItem from './PageComponent/ProtocolItem'
import Header from '../Header/Header'
import ArrowHeader from './PageComponent/ArrowHeader'
import Popup from '../ModalWindow/Popup'
import MobileHeader from '../Header/MobileHeader'
import { BsPlusCircle } from 'react-icons/bs'


export default function ProtocolList() {
    let test = []
    const [protocolsToTerapists, setProtocolsToTerapists] = useState([])
    let listTest = JSON.parse(localStorage.getItem('therapistID'))
    console.log(listTest[0])
    useEffect(() => {

        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem("proffesion"))
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocolsToTerapists(
                        snapshot.docs.map((doc) => {
                            console.log('UPD', doc.data())
                            listTest.map((terapist) => {


                                db.collection('Therapists')
                                    .doc(terapist)
                                    .collection('Patient')
                                    .doc(localStorage.getItem('child'))
                                    .collection('Protocols').doc(doc.id).set(doc.data())


                                db.collection('Therapists')
                                    .doc(terapist)
                                    .collection('Patient')
                                    .doc(localStorage.getItem('child'))
                                    .set(JSON.parse(localStorage.getItem('childData')))

                            }
                            )
                        })
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

    const [stimulusToTerapists, setStimulusToTerapists] = useState([])

    console.log(listTest[0])
    useEffect(() => {

        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem("proffesion"))
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .onSnapshot((snapshot) => {

                if (snapshot.size) {

                    snapshot.docs.map((doc) => {
                        db
                            .collection(localStorage.getItem("proffesion"))
                            .doc(localStorage.getItem('user'))
                            .collection('Patient')
                            .doc(localStorage.getItem('child'))
                            .collection('Protocols').doc(doc.id).collection("Stimulus")
                            .onSnapshot((snapshot) => {
                                if (snapshot.size) {

                                    setStimulusToTerapists(snapshot.docs.map((docStim) => {
                                        listTest.map((terapist) => {
                                            db.collection('Therapists')
                                                .doc(terapist)
                                                .collection('Patient')
                                                .doc(localStorage.getItem('child'))
                                                .collection('Protocols').doc(doc.id)
                                                .collection("Stimulus").doc(docStim.id).set(docStim.data())
                                        }
                                        )
                                    }))
                                } else {
                                    console.log('Сука1')
                                }
                            })
                    })

                    console.log('Сука')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])



    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem("proffesion"))
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
    protocols.sort((a, b) => +a.ProtocolId - +b.ProtocolId)
    protocols.map((protocol) => test.push(protocol.id))
    console.log(test)

    localStorage.setItem('protoID', JSON.stringify(test))

    const [child, setChild] = useState([0])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem("proffesion"))
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

    const [isOpenPop, setIsOpenPop] = useState(false);

    const togglePopup = () => {
        setIsOpenPop(!isOpenPop);
    }
    let protocolsNumber = []
    for (let i = 0; i <protocols.length; i++) {
        protocolsNumber.push(i + 1)
    }
    console.log(protocolsNumber)
    return (
        <>
           <MobileHeader />
            <Header />
            <ArrowHeader />
            <button class="create_template_button btn-background-slide" onClick={togglePopup}>Зберегти як шаблон</button>
            <div
                    onClick={() => addProto(protocols.length)}
                    className="add-proto-mobile"
                >
                    <BsPlusCircle />
            </div>
            {isOpenPop && <Popup protocols={protocols} child={child[0]}
                content={<>
                    <b className="text_modul">Будь ласка, оберіть тип даного шаблону:</b>
                    <div className="button_modul">
                        
                    </div>
                </>}
                handleClose={togglePopup}
            />}
            <div className="create_element" >
                {/* <ReactSortable list={protocols} setList={setProtocols}> */}
                {protocolsNumber.map((protocol) => (
                        <ProtocolItem
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
                {/* </ReactSortable> */}
                
            </div>
            
        </>
    )
}


function addProto(length) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .add({
            ProtocolId: +length + 1, 
            SphereOfDevelopment: "", 
            Skill: "", 
            IsActive: '0',
            Interval: "0",
            CorrectionProcedureStep1: "",
            CorrectionProcedureStep2: "",
            CorrectionProcedureStep3: "",
            CriterionIncrease: "",
            DesirableReaction: "",
            Method: "",
            MethodTakingHint: "Тимчасова затримка",
            ReductionСriterion: "",
            StepDescription: "",CriteriongenGenerSkill:""
        })

    // console.log(data.key)
}
