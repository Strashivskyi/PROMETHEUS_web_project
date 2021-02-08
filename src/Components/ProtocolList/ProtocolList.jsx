import './ProtocolList.css'
import React, { useEffect, useState } from "react";
import app from "../../Firebase/firebase";
import ProtocolItem from "./PageComponent/ProtocolItem";
import Header from "../Header/Header";
import ArrowHeader from "./PageComponent/ArrowHeader";

function ProtocolList() {

  

    const [protocols, setProtocols] = useState([]);
    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols")
            .onSnapshot(snapshot => {
                if (snapshot.size) {
                    
                    setProtocols(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука")
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
            <Header />
            <ArrowHeader />
            {protocols.sort((a, b) => +a.ProtocolId - (+b.ProtocolId)).map((protocol) => (
                <ProtocolItem protocolId={protocol.id} protocolName={protocol.ProtocolId}
                    sphereOfDevelopment={protocol.SphereOfDevelopment} skill={protocol.Skill}
                    length={protocols.length} statusCopied={protocol.StatusCopied} isActive={protocol.IsActive}
                    interval={protocol.Interval}
                    correctionProcedureStep1={protocol.CorrectionProcedureStep1} correctionProcedureStep2={protocol.CorrectionProcedureStep2}
                    correctionProcedureStep3={protocol.CorrectionProcedureStep3} criterionIncrease={protocol.CriterionIncrease}
                    desirableReaction={protocol.DesirableReaction} method={protocol.Method}
                    methodTakingHint={protocol.MethodTakingHint} reductionСriterion={protocol.ReductionСriterion} stepDescription={protocol.StepDescription} />))}


                

        </>
    )
}
export default ProtocolList