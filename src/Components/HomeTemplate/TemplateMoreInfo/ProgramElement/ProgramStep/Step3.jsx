import React from 'react'
import app from '../../../../../Firebase/firebase'
import {TextInput} from 'react-native-paper'
function Step3({Instructions3}) {
    return (
        <>
            <div className="element_name">Інструкції до етапу:</div>
            <div className="element_value">
                <TextInput
                    className="element_value"
                    multiline="true"
                    underlineColor="transparent"
                    selectionColor="primary"
                    placeholder={Instructions3}
                    onChange={(event) => addInstruction(event.target.value)}
                    style={{fontSize: '20px'}}
                    raised
                    theme={{colors: {background: '#fcfcfc'}}}
                />
            </div>
        </>
    )
}
export default Step3
function addInstruction(instructionInput) {
    const db = app.firestore()

    db.collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('user'))
        .collection('ProgramTemplates')
        .doc(localStorage.getItem('templateIdMore'))
        .collection('protocols')
        .doc(localStorage.getItem('program'))
        .set({Instructions3: instructionInput})
}
