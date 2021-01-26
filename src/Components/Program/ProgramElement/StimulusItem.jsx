import Delete from "../../../assets/delete.png";
import app from "../../../Firebase/firebase";
function StimulusItem({name,stimulId}) {
    return (
        <>
            <li>
                <div className="stymul_grid_container">
                    <div>{name}</div>
                    <img onClick={()=>DeleteStimul(stimulId)} src={Delete} height="15" style={{cursor:"pointer", marginLeft: "60px", marginRight: "30px", marginTop: "5px", color: "#EEEEEE", height: "13px" }} />
                </div>
            </li>
        </>

    )
}
export default StimulusItem
function DeleteStimul(stimulId) {

    const db = app.firestore();
    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Stimulus").doc(stimulId).delete()
}