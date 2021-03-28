import Duplicate from '../../../assets/duplicate_task.svg'
import Visible from '../../../assets/visible.svg'
import UnVisible from '../../../assets/unVisible.svg'
import Delete from '../../../assets/delete.svg'
import {useState, useEffect} from 'react'
import app from '../../../Firebase/firebase'
import {Link} from 'react-router-dom'
import EditIcon from '../../../assets/edit_new.svg'
import SecondModal from '../../ModalWindow/SecondModal'
import './ProtocolListTemplate'
export default function ProtocolItem({
    protocols,
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
    CriteriongenGenerSkill,
    instruction1,
    instruction2,
    instruction3,
}) {
    let [colorItem, setColorItem] = useState('')

    if (+number % 2 != true) {
        colorItem = '#EEEEEE'
    }
    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="protocol_item" style={{backgroundColor: colorItem}}>
                <p className="protocol_item_text ">
                    Протокол {number}
                    {statusCopied}.{sphereOfDevelopment}.{skill}
                </p>
                <div className="icon_place">
                    <Link
                        onClick={() => {
                            setData(protocolId, number)
                        }}
                        to="/program-template-edit"
                    >
                        <img
                            title="Редагувати"
                            className="icon edit_icon"
                            src={EditIcon}
                        />
                    </Link>

                    <img
                        title="Дублікат"
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
                                stepDescription,
                                CriteriongenGenerSkill,
                                instruction1,
                                instruction2,
                                instruction3
                            )
                        }
                        src={Duplicate}
                    />
                    <CheckIsActive
                        className="icon"
                        isActive={isActive}
                        protocolId={protocolId}
                    />
                    {isOpen && (
                        <SecondModal
                            protocolId={protocolId}
                            content={
                                <>
                                    <b className="second-text_modul">
                                        Ви впевнені, що хочете видалити
                                        протокол?
                                    </b>
                                    <div className="second-button_modul" />
                                </>
                            }
                            handleClose={toggleModal}
                        />
                    )}

                    <img
                        title="Видалити"
                        className="icon"
                        onClick={() => DeleteProtocol(protocolId, protocols)}
                        src={Delete}
                    />
                </div>
            </div>
        </>
    )
}
function CheckIsActive({isActive, protocolId}) {
    console.log(isActive)
    if (isActive == true) {
        return (
            <img
                title="Активований"
                onClick={() => UpdateActiveStatus(protocolId, '0')}
                className="icon"
                src={Visible}
            />
        )
    } else {
        return (
            <img
                title="Деактивований"
                onClick={() => UpdateActiveStatus(protocolId, '1')}
                className="icon"
                src={UnVisible}
            />
        )
    }
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
    stepDescription,
    CriteriongenGenerSkill,
    instruction1,
    instruction2,
    instruction3
) {
    localStorage.setItem('program', protocolId)
    const db = app.firestore()

    db.collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('user'))
        .collection('CreateTemplate')
        .add({
            SphereOfDevelopment: sphereOfDevelopment,
            ProtocolId: id,
            Skill: skill,
            StatusCopied: '(Копія Протоколу )',
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
            CriteriongenGenerSkill: CriteriongenGenerSkill,
            Instructions1: instruction1,
            Instructions2: instruction2,
            Instructions3: instruction3,
        })

    // console.log(data.key)
}
function DeleteProtocol(protocolId, protocols) {
    const db = app.firestore()
    db.collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('user'))
        .collection('CreateTemplate')
        .doc(protocolId)
        .delete()
        .then((doc) => {
            // for (let i = 0; i < protocols.length; i++) {
            //     console.log("ПІЗДААААА  " + i+1 + "БЛЯДСЬКИЙ ПРІОР " + protocols[i].ProtocolId)
            //     db.collection(localStorage.getItem("proffesion"))
            //         .doc(localStorage.getItem('user'))
            //         .collection('Patient')
            //         .doc(localStorage.getItem('child'))
            //         .collection('Protocols').doc(protocols[i].id)
            //         .update({ ProtocolId: i + 1 })
            // }
        })
}

function UpdateActiveStatus(protocolId, valueStatus) {
    const db = app.firestore()

    db.collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('user'))
        .collection('CreateTemplate')
        .doc(protocolId)
        .update({IsActive: valueStatus})
}
function setData(param1, param2) {
    localStorage.setItem('program', param1)
    localStorage.setItem('programNumber', param2)
}
