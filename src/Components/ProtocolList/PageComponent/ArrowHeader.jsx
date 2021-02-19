import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Arrow from '../../../assets/arrow.png'
import Delete from '../../../assets/delete.svg'
import app from '../../../Firebase/firebase'
import { BsPlusCircle } from 'react-icons/bs'

function ArrowHeader() {
    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection('User')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
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
            <div className="patient_upper_flex_container">
                <h2 style={{ marginLeft: '6rem' }}>
                    <Link to="/" className="patients_link">
                        Пацієнти
                    </Link>
                </h2>
                <img
                    src={Arrow}
                    height="20"
                    style={{
                        marginLeft: '30px',
                        marginRight: '30px',
                        marginTop: '28px',
                        color: 'black',
                    }}
                />
                <h2 ><Link to="/patient" className="patients_link" >{localStorage.getItem("childName")}</Link></h2>
                <img src={Arrow} height="20" style={{ marginLeft: "30px", marginRight: "30px", marginTop: "28px", color: "black" }} />
                <h2 style={{ color: "#6F6F6F" }}>Програма</h2>

                <div
                    onClick={() => addProto(protocols.length)}
                    className="add-proto"
                >
                    <BsPlusCircle size={50} />
                </div>
            </div>
        </>
    )
}
function addProto(length) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .add({
            ProtocolId: +length + 1, 
            SphereOfDevelopment: "", 
            Skill: "", 
            IsActive: '0',
            Interval: "0",
            CorrectionProcedureStep1: "",
            CorrectionProcedureStep2: "",
            CorrectionProcedureStep3: "",
            CriterionIncrease: "",
            DesirableReaction: "",
            Method: "",
            MethodTakingHint: "Тимчасова затримка",
            ReductionСriterion: "",
            StepDescription: "",CriteriongenGenerSkill:""
        })

    // console.log(data.key)
}
export default ArrowHeader
