import Visible from '../../../assets/visible.svg'
import UnVisible from '../../../assets/unVisible.svg'
import { useState } from 'react'
import app from '../../../Firebase/firebase'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function ProtocolItemTherapist({
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
                    <CheckIsActive
                        isActive={isActive}
                        protocolId={protocolId}
                    />
                    <Link
                        onClick={() =>
                            {setData(protocolId,number)}
                        }
                        to="/program"
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

function CheckIsActive({ isActive, protocolId }) {
    console.log(isActive)
    if (isActive == true) {
        return (
            <img
                onClick={() => UpdateActiveStatus(protocolId, '0')}
                className="icon"
                src={Visible}
            />
        )
    } else {
        return (
            <img
                onClick={() => UpdateActiveStatus(protocolId, '1')}
                className="icon"
                src={UnVisible}
            />
        )
    }
}
function UpdateActiveStatus(protocolId, valueStatus) {
    const db = app.firestore()

    db.collection(localStorage.getItem("proffesion"))
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(protocolId)
        .update({ IsActive: valueStatus })
}

function setData(param1,param2){
    localStorage.setItem('program', param1)
    localStorage.setItem("programNumber",param2)
}