import Duplicate from "../../../assets/duplicate_task.svg";
import Edit from "../../../assets/edit.svg";
import Visible from "../../../assets/visible.svg";
import UnVisible from "../../../assets/unVisible.svg";
import Delete from "../../../assets/delete.svg";
import { useState } from "react";
import app from "../../../Firebase/firebase";
import { Link } from "react-router-dom";



function ProtocolItem({ protocolId, protocolName, sphereOfDevelopment, skill, length, statusCopied, isActive }) {
    let [colorItem, setColorItem] = useState('')
    if (+protocolName % 2 != true) {
        colorItem = ("#EEEEEE")

    }
    console.log(isActive)

    return (
        <>
            <div className="protocol_item" style={{ backgroundColor: colorItem }}>
                <p className='protocol_item_text '>Протокол {protocolName} {statusCopied}. {sphereOfDevelopment}. {skill}</p>
                <div className="icon_place">
                    <Link to="/edit-protocol">
                        <img className="icon-edit" src={Edit} />
                    </Link>

                    <img className="icon" onClick={() => CreateDuplicateProtocol(+length + 1, sphereOfDevelopment, skill, protocolName)} src={Duplicate} />
                    <CheckIsActive isActive={isActive} protocolId={protocolId} />

                    <img className="icon" onClick={() => DeleteProtocol(protocolId)} src={Delete} />

                </div>
            </div></>
    )
}
export default ProtocolItem

function CreateDuplicateProtocol(id, sphereOfDevelopment, skill, copiId) {
    const db = app.firestore();
    let test = id
    console.log(test)
    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").add({ ProtocolId: id, SphereOfDevelopment: sphereOfDevelopment, Skill: skill, StatusCopied: "(Копія Протокол " + copiId + ")", IsActive: "0" })

    setTimeout(() => { window.location.reload(false); }, 250);

}
function DeleteProtocol(protocolId) {

    const db = app.firestore();
    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(protocolId).delete()

    setTimeout(() => { window.location.reload(false); }, 250);
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

    setTimeout(() => { window.location.reload(false); }, 250);

}