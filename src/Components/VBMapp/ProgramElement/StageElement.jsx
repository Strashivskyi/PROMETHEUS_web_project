import app from '../../../Firebase/firebase'
import '../VBMapp.css'
import React, {useEffect, useState} from 'react'
import {Update} from '@material-ui/icons'
import Card from '../Popup/PopupCard'
import Popup from 'reactjs-popup'

function StageElement({id, idStage}) {
    let [protocols, setProtocols] = useState([])

    useEffect(() => {
        // /VB-MAPP_protocol/Манд/protocol
        const db = app.firestore()
        const unsubscribe = db
            .collection('Users')
            .doc(localStorage.getItem('user'))
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('child'))

            .collection('VB-MAPP_protocol')
            .doc(id)
            .collection('protocols')
            .doc(idStage)
            .collection('stage')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocols(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                } else {
                    console.log('trouble with firebase')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    function UpdateColor(id, idStage, proto) {
        const db = app.firestore()
        db.collection('Users')
            .doc(localStorage.getItem('user'))
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('child'))
            .collection('VB-MAPP_protocol')
            .doc(id)
            .collection('protocols')
            .doc(idStage)
            .collection('stage')
            .doc(proto.id)
            .update({color: 'yellow'})
        db.collection('Users')
            .doc(localStorage.getItem('user'))
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .doc(proto.id)
            .set(proto)
    }

    return (
        <>
            {protocols.map((proto) => (
                <div className="protocol-cell" id="keepinside">
                    <Popup
                        key={proto}
                        trigger={
                            <div
                                className="under-block"
                                style={{backgroundColor: proto.color}}
                                onClick={() => UpdateColor(id, idStage, proto)}
                            ></div>
                        }
                        on="hover"
                        mouseEnterDelay={500}
                        mouseLeaveDelay={100}
                        position={['top center']}
                        keepTooltipInside=".program-main-block"
                        nested
                    >
                        <Card
                            className="popup-card"
                            programElement={proto}
                            id={id}
                            idStage={idStage}
                        />
                    </Popup>
                </div>
            ))}
        </>
    )
}
export default StageElement
