import React, { useEffect, useState } from 'react'
import app from '../../../../Firebase/firebase'
import InstructionItem from '../../ProgramElement/Instruction/InstructionItem'
import { TextInput } from 'react-native-paper'
function Step1({ Instructions1 }) {
    let [instructionInput, setInstructionInput] = useState('')
    // let [instructions, setInstructions] = useState([]);

    // useEffect(() => {
    //     const db = app.firestore();
    //     const unsubscribe = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Instructions")
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
                <TextInput
                    className="element_value"
                    multiline="true"
                    underlineColor="transparent"
                    selectionColor="primary"
                    placeholder={Instructions1}
                    onChange={(event) => addInstruction(event.target.value)}
                    style={{ fontSize: '20px' }}
                    raised
                    theme={{ colors: { background: '#fcfcfc' } }}
                />
            </div>
        </>
    )
}
export default Step1
function addInstruction(instructionInput) {
    const db = app.firestore()
    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .set({ Instructions1: instructionInput })
}
