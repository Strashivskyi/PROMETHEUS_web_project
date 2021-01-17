import React, { useEffect, useState } from "react";
import app from "../../../../Firebase/firebase";
import InstructionItem3 from "../../ProgramElement/Instruction/InstructionItem3";

function Step3() {
    let [instructionInput, setInstructionInput] = useState("")
    let [instructions, setInstructions] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("InstructionsDificult3").get();
            setInstructions(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        };
        setTimeout(() => { fetchData() }, 2000);
        console.log("1")
    }, [instructions, setInstructions]);
    return (

        <>

            <div className="element_name">Інструкції до етапу::</div>
            <div className="element_value">
                <ol>
                    {instructions.map((instruction) => (<InstructionItem3 text={instruction.Text} instructionId={instruction.id} />))}


                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <button onClick={() => addInstruction(instructionInput)} className="add_button"><h1 style={{ marginTop: "5px", marginBottom: "5px", textAlign: "center", width: "30px", color: "#4d4d4d" }}>+</h1></button>
                        <div className="transparent_input">
                            <input type="text" onChange={(event) => setInstructionInput(event.target.value)} name="name" placeholder="Додати інструкцію...." />
                        </div>
                    </div>
                </ol>
            </div>
        </>

    )
}
export default Step3
function addInstruction(instructionInput) {
    const db = app.firestore();

    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("InstructionsDificult3").add({ Text: instructionInput })

}
