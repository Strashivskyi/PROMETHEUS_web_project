import './ProtocolList.css'
import React, { useEffect, useState } from "react";
import app from "../../Firebase/firebase";
import ProtocolItem from "./PageComponent/ProtocolItem";
import Header from "../Header/Header";
import ArrowHeader from "./PageComponent/ArrowHeader";
function ProtocolList() {

    const [protocols, setProtocols] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").get();
            setProtocols(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        };
        setTimeout(() => { fetchData() }, 2000);
    }, [protocols, setProtocols]);
    console.log(protocols)

    return (
        <>
            <Header />
            <ArrowHeader />
            {protocols.map((protocol) => (
                <ProtocolItem protocolId={protocol.id} protocolName={protocol.ProtocolId}
                    sphereOfDevelopment={protocol.SphereOfDevelopment} skill={protocol.Skill}
                    length={protocols.length} statusCopied={protocol.StatusCopied} isActive={protocol.IsActive}
                    interval={protocol.Interval}
                    correctionProcedureStep1={protocol.CorrectionProcedureStep1} correctionProcedureStep2={protocol.CorrectionProcedureStep2} correctionProcedureStep3={protocol.CorrectionProcedureStep3} criterionIncrease={protocol.CriterionIncrease} desirableReaction={protocol.DesirableReaction} method={protocol.Method} 
                    methodTakingHint={protocol.MethodTakingHint} reductionСriterion={protocol.ReductionСriterion} stepDescription={protocol.StepDescription} />))}

        </>
    )
}
export default ProtocolList