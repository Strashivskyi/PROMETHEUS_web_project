import Visible from '../../../assets/visible.svg'
import UnVisible from '../../../assets/unVisible.svg'
import { useState } from 'react'
import app from '../../../Firebase/firebase'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function ProtocolItemTherapist({
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


    if (+protocolName % 2 != true) {
        colorItem = '#EEEEEE'
    }

    return (
        <>
            <div
                className="protocol_item"
                style={{ backgroundColor: colorItem, marginLeft: '5rem' }}
            >
                <p className="protocol_item_text ">
                    Протокол {protocolName} {statusCopied}.{' '}
                    {sphereOfDevelopment}. {skill}
                </p>
                <div className="control-panel">
                    <CheckIsActive
                        isActive={isActive}
                        protocolId={protocolId}
                    />
                    <Link
                        onClick={() =>
                            localStorage.setItem('program', protocolId)
                        }
                        to="/program"
                    >
                        <AiOutlineArrowRight
                            size={25}
                            style={{
                                paddingLeft: '2rem',
                            }}
                            color="black"
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

function CreateDuplicateProtocol(
    protocolId,
    id,
    sphereOfDevelopment,
    skill,
    copiId,
    interval,
    correctionProcedureStep1,
    correctionProcedureStep2,
    correctionProcedureStep3,
    criterionIncrease,
    desirableReaction,
    method,
    methodTakingHint,
    reductionСriterion,
    stepDescription
) {
    localStorage.setItem('program', protocolId)
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc()
        .set({
            SphereOfDevelopment: sphereOfDevelopment,
            ProtocolId: id,
            Skill: skill,
            StatusCopied: '(Копія Протокол ' + copiId + ')',
            IsActive: '0',
            Interval: interval,
            CorrectionProcedureStep1: correctionProcedureStep1,
            CorrectionProcedureStep2: correctionProcedureStep2,
            CorrectionProcedureStep3: correctionProcedureStep3,
            CriterionIncrease: criterionIncrease,
            DesirableReaction: desirableReaction,
            Method: method,
            MethodTakingHint: methodTakingHint,
            ReductionСriterion: reductionСriterion,
            StepDescription: stepDescription,
        })

    // console.log(data.key)
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

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(protocolId)
        .update({ IsActive: valueStatus })
}
