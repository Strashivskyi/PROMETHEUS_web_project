import React from "react";
import { withRouter } from 'react-router'
import app from '../../../Firebase/firebase'
const Popup = (props,{history}) => {
    console.log(props.protocols)
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                {props.content}
                <div className="button-popup">
                    <button onClick={() => CreateProgramTemplates(props.protocols, props.child, "Приватний")} className="button_private">Приватний</button>
                    <button onClick={() => CreateProgramTemplates(props.protocols, props.child, "Публічний")} className="button_public">Публічний</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;


function CreateProgramTemplates(protocols, child, typeTemplates) {
    var endCycle = 0
    console.log(protocols)
    const db = app.firestore()
    if (typeTemplates == "Приватний") {
        db.collection(localStorage.getItem("proffesion"))
            .doc(localStorage.getItem('user'))
            .collection('ProgramTemplates')
            .add({
                Age: "",
                Diagnos: "",
                KidWeight: "",
            })
            .then(function (docRef) {
                protocols.map((protocol) =>
                    db
                        .collection(localStorage.getItem("proffesion"))
                        .doc(localStorage.getItem('user'))
                        .collection('ProgramTemplates')
                        .doc(docRef.id)
                        .collection('protocols')
                        .add(protocol)

                )
                db
                    .collection(localStorage.getItem("proffesion"))
                    .doc(localStorage.getItem('user'))
                    .collection('ProgramTemplates')
                    .doc(docRef.id)
                    .set({
                        Age: "",
                        Diagnos: "",
                        KidWeight: "", CountOfProtocol: protocols.length
                    })
            })
            .catch(function (error) {
                console.error('Error adding document: ', error)
            })
        endCycle = 1
    }
    if (typeTemplates == "Публічний") {
        db
            .collection('ProgramTemplates')
            .add({
                Age: "",
                Diagnos: "",
                KidWeight: "",
            })
            .then(function (docRef) {
                protocols.map((protocol) =>
                    db
                        .collection('ProgramTemplates')
                        .doc(docRef.id)
                        .collection('protocols')
                        .add(protocol)
                )
                db
                    .collection('ProgramTemplates')
                    .doc(docRef.id)
                    .set({
                        Age: "",
                        Diagnos: "",
                        KidWeight: "", CountOfProtocol: protocols.length
                    })
            })
            .catch(function (error) {
                console.error('Error adding document: ', error)
            })
        endCycle = 1
    }


    if (endCycle == 1) {

        protocols.map((proto) => db.collection(localStorage.getItem("proffesion"))
            .doc(localStorage.getItem('user'))
            .collection('CreateTemplate').doc(proto.id).delete())
        setTimeout(() => {

            alert(`${typeTemplates} шаблон протоколів успішно створений!`)
            
            window.location.reload()
        
        });
    }
}