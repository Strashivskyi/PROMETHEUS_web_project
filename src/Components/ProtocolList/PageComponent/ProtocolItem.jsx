import Duplicate from '../../../assets/duplicate_task.svg'
import Visible from '../../../assets/visible.svg'
import UnVisible from '../../../assets/unVisible.svg'
import Delete from '../../../assets/delete.svg'
import { useState, useEffect } from 'react'
import app from '../../../Firebase/firebase'
import { Link } from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit'
export default function ProtocolItem({
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
                <div className="icon_place">
                    <Link
                        onClick={() =>
                            localStorage.setItem('program', protocolId)
                        }
                        to="/program"
                    >
                        <EditIcon className="icon" style={{ position: "relative", top: "-5px", color: "black" }} />
                    </Link>

                    <img
                        className="icon"
                        onClick={() =>
                            CreateDuplicateProtocol(
                                protocolId,
                                +length + 1,
                                sphereOfDevelopment,
                                skill,
                                protocolName,
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
                            )
                        }
                        src={Duplicate}
                    />
                    <CheckIsActive className="icon" isActive={isActive} protocolId={protocolId} />


                    <img
                        className="icon"
                        onClick={() => DeleteProtocol(protocolId)}
                        src={Delete}
                    />
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
        .add({
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
        .then(function(docRef) {
            db.collection('User')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols').doc(docRef.id )
            .collection("CriteriongenGenerSkill")
            .add({Text:""})
            db.collection('User')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols').doc(docRef.id )
            .collection("Stimulus")
            .add({Name:""})
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    // console.log(data.key)
}
function DeleteProtocol(protocolId) {
    const db = app.firestore()
    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(protocolId)
        .delete()
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