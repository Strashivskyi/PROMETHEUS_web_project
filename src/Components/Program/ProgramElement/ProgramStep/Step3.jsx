import React, { useEffect, useState } from 'react'
import app from '../../../../Firebase/firebase'
import InstructionItem3 from '../../ProgramElement/Instruction/InstructionItem3'
import { TextInput } from 'react-native-paper'
function Step3({ Instructions3 }) {
    let [instructionInput, setInstructionInput] = useState('')
    // let [instructions, setInstructions] = useState([]);

    // useEffect(() => {
    //     const db = app.firestore();
    //     const unsubscribe = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("InstructionsDificult3")
    //         .onSnapshot(snapshot => {
    //             if (snapshot.size) {

    //                 setInstructions(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    //                 console.log("Сука ")
    //             } else {
    //                 console.log("Сука1")
    //             }
    //         })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])

    return (
        <>
            <div className="element_name">Інструкції до етапу:</div>
            <div className="element_value">
                {/* {instructions.map((instruction) => ( */}
                {/* <InstructionItem text={Instructions1}  */}
                {/* // instructionId={instruction.id}
                     /> */}
                {/* ))} */}

                <TextInput
                    className="element_value"
                    multiline="true"
                    underlineColor="transparent"
                    selectionColor="primary"
                    placeholder={Instructions3}
                    onChange={(event) => addInstruction(event.target.value)}
                    style={{ fontSize: '20px' }}
                    raised
                    theme={{ colors: { background: '#fcfcfc' } }}
                />

                {/* <div style={{ display: "flex", flexDirection: "row" }}>
                        <button onClick={() => addInstruction(instructionInput)} className="add_button">                                                <h1 style={{ marginTop: "5px", marginBottom: "5px", textAlign: "center", width: "22px", height: "20px", color: "#4d4d4d", fontSize: "20px" }}>+</h1></button>
                        <div className="transparent_input">
                            <input type="text" onChange={(event) => setInstructionInput(event.target.value)} type="text" name="name" placeholder="Додати інструкцію...." />
                        </div>
                    </div> */}
            </div>
        </>
    )
}
export default Step3
function addInstruction(instructionInput) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .set({ Instructions3: instructionInput })
}
