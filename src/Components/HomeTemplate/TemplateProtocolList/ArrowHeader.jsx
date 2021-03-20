import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Arrow from '../../../assets/arrow.png'
import ArrowHeaderSimple from "../PageComponent/ArrowHeaderSimple";
import app from '../../../Firebase/firebase'
import { BsPlusCircle } from 'react-icons/bs'

function ArrowHeader() {
    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
        .collection(localStorage.getItem("proffesion"))
        .doc(localStorage.getItem('user'))
        .collection('CreateTemplate')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocols(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                    console.log('Сука')
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
        <ArrowHeaderSimple/>
           
                
              
                <div
                    onClick={() => addProto(protocols.length)}
                    className="add-proto"
                >
                    <BsPlusCircle size={50} style={{marginTop:"30px"}} />
                </div>
            
        </>
    )
}
function addProto(length) {
    const db = app.firestore()

    db .collection(localStorage.getItem("proffesion"))
    .doc(localStorage.getItem('user'))
    .collection('CreateTemplate')
        .add({
            ProtocolId: +length + 1, 
            SphereOfDevelopment: "", 
            Skill: "", 
            IsActive: "",
            Interval: "",
            CorrectionProcedureStep1: "",
            CorrectionProcedureStep2: "",
            CorrectionProcedureStep3: "",
            CriterionIncrease: "",
            DesirableReaction: "",
            Method: "",
            MethodTakingHint: "",
            ReductionСriterion: "",
            StepDescription: "",CriteriongenGenerSkill:""
        })

    // console.log(data.key)
}
export default ArrowHeader