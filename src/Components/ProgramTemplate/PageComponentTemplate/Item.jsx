
import Delete from "../../../assets/delete.svg";
import { useState, useEffect } from "react";
import app from "../../../Firebase/firebase";



function TemplateItem({ diagnos, age, count, number, idTemplate, history }) {
    return (
        <>

            <div id="template" className="template_place" >
                <img className="template_img" onClick={() => DeleteTemplate(idTemplate)} src={Delete}></img>

                <div className="template_categories" onClick={() => (CreateDuplicateTemplate(idTemplate, history))} >
                    <div className="template_program">Програма: {number}</div>
                    <div className="template_diagnos">Діагноз: {diagnos}</div>
                    <div className="template_age">Вік: {age}</div>
                    <div className="template_protocols">Кількість протоколів: {count}</div>
                </div>

            </div>

        </>
    )
}
export default TemplateItem

function CreateDuplicateTemplate(idTemplate, history) {

    const db = app.firestore();

    console.log(db.collection("User").doc(localStorage.getItem("user")).collection("ProgramTemplates").doc(idTemplate).collection("protocols").onSnapshot(snapshot => {
        if (snapshot.size) {

            (snapshot.docs.map(doc => {
                db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").add(doc.data())
                console.log(doc.data())
            }
            ));

            console.log("Сука ")
        } else {
            console.log('Error in Components/ProgramTemplate/PageComponentTemplate/Item.jsx')
        }
    })
    )
    history.push("/protocol-list")
}


// console.log(data.key)

//}
function DeleteTemplate(idTemplate) {

    const db = app.firestore();
    db.collection("User").doc(localStorage.getItem("user")).collection("ProgramTemplates").doc(idTemplate).delete()


}
// function CheckIsActive({ isActive, protocolId }) {
//     console.log(isActive)
//     if (isActive == true) {

//         return (
//             <img onClick={() => UpdateActiveStatus(protocolId, '0')} className="icon" src={Visible} />
//         )
//     }
//     else {
//         return (<img onClick={() => UpdateActiveStatus(protocolId, '1')} className="icon" src={UnVisible} />
//         )
//     }
// }
// function UpdateActiveStatus(protocolId, valueStatus) {
//     const db = app.firestore();

//     db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(protocolId).update({ IsActive: valueStatus })


// }