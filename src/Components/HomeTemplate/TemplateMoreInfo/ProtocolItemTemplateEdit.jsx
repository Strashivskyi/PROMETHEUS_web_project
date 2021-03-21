import { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import app from '../../../Firebase/firebase'
import Delete from '../../../assets/delete.svg'
export default function ProtocolItemTemplate({
    number,
    protocolId,
    protocolName,
    sphereOfDevelopment,
    skill,
    length,
    statusCopied,
    isActive,
    interval,
    correctionProcedureStep1,
    correctionProcedureStep2,
    correctionProcedureStep3,
    criterionIncrease,
    desirableReaction,
    method,
    methodTakingHint,
    reductionСriterion,
    stepDescription,
}) {
    let [colorItem, setColorItem] = useState('')


    if (+number % 2 != true) {
        colorItem = '#EEEEEE'
    }

    return (
        <>
            
                <div
                    className="protocol_item"
                    style={{ backgroundColor: colorItem, marginLeft: '7vw' }}
                >
                    <p className="protocol_item_text ">
                        Протокол {number} {statusCopied}.{' '}
                        {sphereOfDevelopment}. {skill}
                    </p>
                    <div className="icon_place">
                        <>
                            <img
                                title="Видалити"
                                className="icon"
                                onClick={() => DeleteProtocol(protocolId)}
                                src={Delete}
                            />
                        </>

                        <Link
                            title="Переглянути"
                            onClick={() => { setData(protocolId, number) }
                            }
                            to="template-more-info-protocol"
                        >
                            <AiOutlineArrowRight
                                className='icon go_icon'
                                color="black"
                            />
                        </Link>

                    </div>
                </div>
            
        </>
    )
}




function DeleteProtocol(protocolId) {
    const db = app.firestore()
    db.collection(localStorage.getItem("proffesion"))
        .doc(localStorage.getItem('user'))
        .collection('ProgramTemplates').doc(localStorage.getItem("templateIdMore")).collection('protocols')
        .doc(protocolId)
        .delete().then(doc => {
         
        })
}

function setData(param1, param2) {
    localStorage.setItem('program', param1)
    localStorage.setItem("programNumber", param2)
}
