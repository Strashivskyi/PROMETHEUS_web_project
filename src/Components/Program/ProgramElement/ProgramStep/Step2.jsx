
import React, { useEffect, useState } from "react";
import app from "../../../../Firebase/firebase";
import InstructionItem2 from "../../ProgramElement/Instruction/InstructionItem2";

function Step2() {
    let [instructionInput, setInstructionInput] = useState("")
    let [instructions, setInstructions] = useState([]);

    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("InstructionsDificult2")
            .onSnapshot(snapshot => {
                if (snapshot.size) {
                    
                    setInstructions(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
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

            <div className="element_name">Інструкції до етапу::</div>
            <div className="element_value">
                <ol>
                    {instructions.map((instruction) => (<InstructionItem2 text={instruction.Text} instructionId={instruction.id} />))}


                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button onClick={() => addInstruction(instructionInput)} className="add_button">                                                <h1 style={{ marginTop: "5px", marginBottom: "5px", textAlign: "center", width: "22px", height: "20px", color: "#4d4d4d", fontSize:"20px" }}>+</h1></button>
                        <div className="transparent_input">
                            <input type="text" onChange={(event) => setInstructionInput(event.target.value)} name="name" placeholder="Додати інструкцію...." />
                        </div>
                    </div>
                </ol>
            </div>
        </>

    )
}
export default Step2
function addInstruction(instructionInput) {
    const db = app.firestore();

    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("InstructionsDificult2").add({ Text: instructionInput })

}
