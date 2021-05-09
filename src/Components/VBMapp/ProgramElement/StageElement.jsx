import app from '../../../Firebase/firebase'
import "../VBMapp.css"
import React, { useEffect, useState } from 'react'
import { Update } from '@material-ui/icons'
function StageElement({ id, idStage }) {
    let [protocols, setProtocols] = useState([])

    useEffect(() => {
        // /VB-MAPP_protocol/Манд/protocol
        const db = app.firestore()
        const unsubscribe = db
        .collection("Users")
        .doc(localStorage.getItem('user'))
        .collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('child'))

            .collection("VB-MAPP_protocol")
            .doc(id).collection("protocols").doc(idStage).collection("stage")
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocols(
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
    console.log()
    return (
        <>
            {protocols.map((proto) => (

                <div className="under-block" style={{backgroundColor:proto.color}} onClick={()=>UpdateCollor(id, idStage,proto)}>

                </div>
            ))}


        </>
    )
}
export default StageElement
function UpdateCollor(id, idStage,proto){
    const db = app.firestore()
    db
    .collection("Users")
    .doc(localStorage.getItem('user'))
    .collection(localStorage.getItem('proffesion'))
    .doc(localStorage.getItem('child'))

    .collection("VB-MAPP_protocol")
    .doc(id).collection("protocols").doc(idStage).collection("stage").doc(proto.id).set({color:"yellow"})
    db
    .collection("Users")
    .doc(localStorage.getItem('user'))
    .collection(localStorage.getItem('proffesion'))
    .doc(localStorage.getItem('child')).collection("Protocols").doc(proto.id).set(proto)





}