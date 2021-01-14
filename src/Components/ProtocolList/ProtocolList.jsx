import './ProtocolList.css'
import React, { useEffect, useState } from "react";
import app from "../../Firebase/firebase";
import ProtocolItem from "./PageComponent/ProtocolItem";
import Header from "../Header/Header";
import ArrowHeader from "./PageComponent/ArrowHeader";
function ProtocolList() {

    let [protocols, setProtocols] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").get();
            setProtocols(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        };
        fetchData()
    }, []);
    console.log(protocols.length)

    return (
        <>
            <Header />
            <ArrowHeader />
            {protocols.map((protocol) => (
                <ProtocolItem protocolId={protocol.id} protocolName={protocol.ProtocolId}
                    sphereOfDevelopment={protocol.SphereOfDevelopment} skill={protocol.Skill}
                    length={protocols.length} statusCopied={protocol.StatusCopied} isActive={protocol.IsActive} />))}

        </>
    )
}
export default ProtocolList