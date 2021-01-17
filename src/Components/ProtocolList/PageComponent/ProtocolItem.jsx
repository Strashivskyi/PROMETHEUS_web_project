import Duplicate from "../../../assets/duplicate_task.svg";
import Edit from "../../../assets/edit.svg";
import Visible from "../../../assets/visible.svg";
import UnVisible from "../../../assets/unVisible.svg";
import Delete from "../../../assets/delete.svg";
import { useState, useEffect } from "react";
import app from "../../../Firebase/firebase";
import { Link } from "react-router-dom";



function ProtocolItem({ protocolId, protocolName, sphereOfDevelopment, skill, length, statusCopied, isActive, interval
    , correctionProcedureStep1, correctionProcedureStep2, correctionProcedureStep3, criterionIncrease, desirableReaction, method, methodTakingHint, reductionСriterion, stepDescription }) {
    let [colorItem, setColorItem] = useState('')
    if (+protocolName % 2 != true) {
        colorItem = ("#EEEEEE")

    }
    let [instruction, setInstruction] = useState([])
    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Instructions")
            .onSnapshot(snapshot => {
                if (snapshot.size) {

                    setInstruction(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука ")
                } else {
                    console.log("Сука1")
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])




    let [instruction2, setInstruction2] = useState([])
    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("InstructionsDificult2")
            .onSnapshot(snapshot => {
                if (snapshot.size) {

                    setInstruction2(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука ")
                } else {
                    console.log("Сука1")
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])


    let [instruction3, setInstruction3] = useState([])

    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("InstructionsDificult3")
            .onSnapshot(snapshot => {
                if (snapshot.size) {

                    setInstruction3(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука ")
                } else {
                    console.log("Сука1")
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])



    let [stimul, setStimul] = useState([])


    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Stimulus")
            .onSnapshot(snapshot => {
                if (snapshot.size) {

                    setStimul(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука ")
                } else {
                    console.log("Сука1")
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])




    let [criteriongenGenerSkill, setCriteriongenGenerSkill] = useState([])


    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("CriteriongenGenerSkill")
            .onSnapshot(snapshot => {
                if (snapshot.size) {

                    setCriteriongenGenerSkill(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука ")
                } else {
                    console.log("Сука1")
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            <div className="protocol_item" style={{ backgroundColor: colorItem }}>
                <p className='protocol_item_text '>Протокол {protocolName} {statusCopied}. {sphereOfDevelopment}. {skill}</p>
                <div className="icon_place">
                    <Link onClick={() => localStorage.setItem("program", protocolId)} to="/program">
                        <img className="icon-edit" src={Edit} />
                    </Link>

                    <img className="icon" onClick={() => CreateDuplicateProtocol(instruction, instruction2, instruction3, stimul, criteriongenGenerSkill, protocolId, +length + 1, sphereOfDevelopment, skill, protocolName, interval
                        , correctionProcedureStep1, correctionProcedureStep2, correctionProcedureStep3, criterionIncrease, desirableReaction, method, methodTakingHint, reductionСriterion, stepDescription)} src={Duplicate} />
                    <CheckIsActive isActive={isActive} protocolId={protocolId} />

                    <img className="icon" onClick={() => DeleteProtocol(protocolId)} src={Delete} />

                </div>
            </div></>
    )
}
export default ProtocolItem

function CreateDuplicateProtocol(instruction, instruction2, instruction3, stimul, criteriongenGenerSkill, protocolId, id, sphereOfDevelopment, skill, copiId, interval
    , correctionProcedureStep1, correctionProcedureStep2, correctionProcedureStep3, criterionIncrease, desirableReaction, method, methodTakingHint, reductionСriterion, stepDescription) {
    localStorage.setItem("program", protocolId)
    const db = app.firestore();
    console.log(instruction)
    console.log(instruction2)
    console.log(instruction3)
    console.log(stimul)
    console.log(criteriongenGenerSkill)
    const data = db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").add({
        ProtocolId: id, SphereOfDevelopment: sphereOfDevelopment, Skill: skill, StatusCopied: "(Копія Протокол " + copiId + ")", IsActive: "0", Interval: interval, CorrectionProcedureStep1: correctionProcedureStep1, CorrectionProcedureStep2: correctionProcedureStep2, CorrectionProcedureStep3: correctionProcedureStep3, CriterionIncrease: criterionIncrease,
        DesirableReaction: desirableReaction, Method: method, MethodTakingHint: methodTakingHint, ReductionСriterion: reductionСriterion, StepDescription: stepDescription
    })
        .then(function (docRef) {
            instruction.map(instr => (
                db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(docRef.id).collection("Instructions").add({ Text: instr.Text }))
            )
            instruction2.map(instr => (
                db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(docRef.id).collection("InstructionsDificult2").add({ Text: instr.Text }))
            )
            instruction3.map(instr => (
                db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(docRef.id).collection("InstructionsDificult3").add({ Text: instr.Text }))
            )
            stimul.map(stimul => (
                db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(docRef.id).collection("Stimulus").add({ Name: stimul.Name }))

            )

            criteriongenGenerSkill.map(criteriongenGenerSkill => (
                db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(docRef.id).collection("CriteriongenGenerSkill").add({ Text: criteriongenGenerSkill.Text }))
            )
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });

    // console.log(data.key)

}
function DeleteProtocol(protocolId) {

    const db = app.firestore();
    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(protocolId).delete()


}
function CheckIsActive({ isActive, protocolId }) {
    console.log(isActive)
    if (isActive == true) {

        return (
            <img onClick={() => UpdateActiveStatus(protocolId, '0')} className="icon" src={Visible} />
        )
    }
    else {
        return (<img onClick={() => UpdateActiveStatus(protocolId, '1')} className="icon" src={UnVisible} />
        )
    }
}
function UpdateActiveStatus(protocolId, valueStatus) {
    const db = app.firestore();

    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(protocolId).update({ IsActive: valueStatus })


}