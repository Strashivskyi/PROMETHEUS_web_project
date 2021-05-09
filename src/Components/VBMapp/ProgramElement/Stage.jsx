import app from '../../../Firebase/firebase'
import "../VBMapp.css"
import React, { useEffect, useState } from 'react'
import StageElement from './StageElement'
function Stage({ id }) {
    let [stage, setStage] = useState([])

    useEffect(() => {
        // /VB-MAPP_protocol/Манд/protocol
        const db = app.firestore()
        const unsubscribe = db
            .collection("Users")
            .doc(localStorage.getItem('user'))
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('child'))

            .collection("VB-MAPP_protocol")
            .doc("МАНД-ПРОХАННЯ").collection("protocols")
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setStage(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                    console.log('Сука ')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            {stage.map((protocol) => (
                <>

                    <div className="under-block-stage" style={{ display: "flex", flexDirection: "row" }}>

                        <StageElement id={id} idStage={protocol.id} />


                    </div>

                </>

            ))}

        </>

    )
}
export default Stage