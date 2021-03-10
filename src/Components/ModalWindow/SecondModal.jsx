import React from "react";
import './SecondModal.css'
const SocondModal = props => {
  return (
    <div className="second-popup-box">
      <div className="second-box">
        <span className="second-close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <div className="second-button-popup">
        <button onClick={() => "Скасувати"}className="second-button_private">Скасувати</button>
        <button onClick={() =>  "Підтвердити"}className="second-button_public">Підтвердити</button>
        </div>
      </div>
    </div>
  );
};
 
export default SocondModal;