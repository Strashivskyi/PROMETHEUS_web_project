
import React, { useEffect, useState } from 'react'
import app from '../../../Firebase/firebase'
import ProtocolItem from './ProtocolItem'
import HeaderHomeTemplate from '../../Header/HeaderHomeTemplate'
import ArrowHeader from './ArrowHeader'
import Popup from './Popup'
import { withRouter } from 'react-router'
function ProtocolListTemplate({history}) {
    let test = []
    localStorage.setItem("homeType","createTemplate")
    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
        .collection(localStorage.getItem("proffesion"))
        .doc(localStorage.getItem('user'))
        .collection('CreateTemplate')
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



    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [currrentProtocoll, setcurrrentProtocoll] = useState(null)
    function dragStartHandler(event, protocol) {
        console.log("DRAG" + protocol.ProtocolId)
        setcurrrentProtocoll(protocol)

    }
    function dragEndHandler(event, protocol) {
        event.target.style.border = 'none'
    }
    function dragOverHandler(event) {
        event.preventDefault()
        event.target.style.border = 'solid 3px #c9c9c9'
    }

    function dropHandler(event, protocol) {


        const db = app.firestore()
        event.preventDefault()
        event.target.style.border = 'none'
        console.log("DROP" + protocol.ProtocolId)
        setProtocols(protocols.map(proto => {
            if (proto.ProtocolId == protocol.ProtocolId) {
                db .collection(localStorage.getItem("proffesion"))
                .doc(localStorage.getItem('user'))
                .collection('CreateTemplate').doc(currrentProtocoll.id)
                    .update({ ProtocolId: protocol.ProtocolId })
                    db .collection(localStorage.getItem("proffesion"))
                    .doc(localStorage.getItem('user'))
                    .collection('CreateTemplate').doc(protocol.id)
                    .update({ ProtocolId: currrentProtocoll.ProtocolId })

                }
          

            return proto
        }

        ))
    }

    protocols.sort((a, b) => +a.ProtocolId - +b.ProtocolId)

    let protocolsNumber = []
    for (let i = 0; i < protocols.length; i++) {
        protocolsNumber.push(i + 1)
    }
    console.log(protocolsNumber)

    return (
        <>
            <HeaderHomeTemplate/>
    <ArrowHeader />
            <button class="create_template_button btn-background-slide" onClick={togglePopup}>Зберегти шаблон</button>
           

            {isOpen && <Popup protocols={protocols} 
                content={<>
                    <b className="text_modul">Будь ласка, оберіть тип даного шаблону:</b>
                    <div className="button_modul">

                    </div>
                </>}
                handleClose={togglePopup}
            />}
            <div className="create_element" >
                {protocolsNumber.map((protocol) => (
                    <>
                        <div draggable='true'
                            onDragStart={(event) => { dragStartHandler(event, protocols[protocol - 1]) }}
                            onDragLeave={(event) => { dragEndHandler(event, protocols[protocol - 1]) }}
                            onDragEnd={(event) => { dragEndHandler(event, protocols[protocol - 1]) }}
                            onDragOver={(event) => { dragOverHandler(event) }}
                            onDrop={(event) => { dropHandler(event, protocols[protocol - 1]) }}
                        >
                            <ProtocolItem
                            protocols={protocols}

                                number={protocol}
                                protocolId={protocols[protocol - 1].id}
                                protocolName={protocols[protocol - 1].ProtocolId}
                                sphereOfDevelopment={protocols[protocol - 1].SphereOfDevelopment}
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
                                criterionIncrease={protocols[protocol - 1].CriterionIncrease}
                                desirableReaction={protocols[protocol - 1].DesirableReaction}
                                method={protocols[protocol - 1].Method}
                                methodTakingHint={protocols[protocol - 1].MethodTakingHint}
                                reductionСriterion={protocols[protocol - 1].ReductionСriterion}
                                stepDescription={protocols[protocol - 1].StepDescription}
                                CriteriongenGenerSkill={protocols[protocol - 1].CriteriongenGenerSkill}
                                instruction1={protocols[protocol - 1].Instructions1}
                                instruction2={protocols[protocol - 1].Instructions2}
                                instruction3={protocols[protocol - 1].Instructions3}
                            />
                        </div>
                    </>
                ))}
                {/* </ReactSortable> */}

            </div>

        </>
    )
}


function addProto(length) {
    const db = app.firestore()

    db .collection(localStorage.getItem("proffesion"))
                .doc(localStorage.getItem('user'))
                .collection('CreateTemplate')
        .add({
            ProtocolId: +length + 1, 
            SphereOfDevelopment: "", 
            Skill: "", 
            IsActive: "",
            Interval: "",
            CorrectionProcedureStep1: "",
            CorrectionProcedureStep2: "",
            CorrectionProcedureStep3: "",
            CriterionIncrease: "",
            DesirableReaction: "",
            Method: "",
            MethodTakingHint: "",
            ReductionСriterion: "",
            StepDescription: "",CriteriongenGenerSkill:""
        })

    // console.log(data.key)
}

export default withRouter(ProtocolListTemplate)