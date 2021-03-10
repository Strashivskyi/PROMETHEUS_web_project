import React from "react";
import './SecondModal.css'
import app from "../../Firebase/firebase";
//import DeleteProtocol from '../ProtocolList/PageComponent/ProtocolItem'

function SecondModal({protocolId,handleClose,content}){
  return (
    <div className="second-popup-box">
      <div className="second-box">
        <span className="second-close-icon" onClick={handleClose}>x</span>
        {content}
        <div className="second-button-popup">
        <button onClick={handleClose} className="second-button_private">Скасувати</button>
        <button onClick={handleClose,(()=>DeleteProtocol(protocolId))} className="second-button_public">Підтвердити</button>
        </div>
      </div>
    </div>
  );
};
 
export default SecondModal;

function DeleteProtocol(protocolId) {

  console.log(protocolId)

    const db = app.firestore()
    db.collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(protocolId)
        .delete()
    JSON.parse(localStorage.getItem('therapistID')).map((terapist) => {
        db.collection('Therapists')
            .doc(terapist)
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .doc(protocolId)
            .delete()
    })

    alert(`Протокол успішно видалений!`)
    setTimeout(() => {
      window.location.reload()
  }, 100);

}


