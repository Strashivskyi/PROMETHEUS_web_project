import Delete from "../../../../assets/delete.png";
import app from "../../../../Firebase/firebase";

function InstructionItem ({text,instructionId}) {
    return (
        <>
            <li>
                <div className="step_grid_container">
                    <div>{text}</div>
                    <img onClick={()=>DeleteInstruction(instructionId)} src={Delete} height="15" style={{cursor:"pointer", marginLeft: "30px", marginRight: "30px", marginTop: "9px", color: "#EEEEEE" }} />

                </div>
            </li>
        </>
    )
}
export default InstructionItem
function DeleteInstruction(instuctionId) {

    const db = app.firestore();
    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Instructions").doc(instuctionId).delete()
}