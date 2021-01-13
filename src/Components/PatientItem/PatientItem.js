import app from "../../Firebase/firebase";
import React, { useEffect, useState } from "react";
import {
    Item,
    Name,
    ButtonItem,
    Amount,
} from "./PatientItem.styled";
import { Link } from "react-router-dom"
import kid from '../../assets/boy.png';
import "../PatientInfo/PatientInfoPage.css";



function PatientItem() {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("Patient").get();
            setPatients(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        };
        fetchData()
    }, []);

    return (
        <>
            <h2 style={{ marginLeft: "4rem" }}>Пацієнти</h2>
            <Amount>Кількість :{patients.length}</Amount>

            {
                patients.map((patient) => (

                    <Item>
                        <img src={kid} width="250" style={{ marginLeft: "0.8rem", marginTop: "0.9rem" }} />

                        <Name>{patient.Name}</Name>
                        <ButtonItem onClick={() => localStorage.setItem("child",patient.id)}><Link to="/patient" className="viewmore_patient">Переглянути</Link></ButtonItem>
                    </Item>
                ))
            }
        </>
    );
};
export default PatientItem