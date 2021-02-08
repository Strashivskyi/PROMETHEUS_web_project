import Delete from "../../../../assets/delete.png";
import CriteriongenGenerSkillItem from "./CriteriongenGenerSkillItem";
import React, { useEffect, useState } from "react";
import app from "../../../../Firebase/firebase";
import "../../Program.css"

function CriteriongenGenerSkill() {

    let [criteriongenGenerSkills, setCriteriongenGenerSkills] = useState([]);
    let [criteriongenGenerSkillInput, setCriteriongenGenerSkillInput] = useState("")


    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("CriteriongenGenerSkill")
            .onSnapshot(snapshot => {
                if (snapshot.size) {

                    setCriteriongenGenerSkills(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука ")
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
            <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Критерій узагальнення навику: </div>
            <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_value">
                <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>
                    <ol style={{
                        fontFamily: "Inter", marginTop: "0.3rem", marginLeft: "-0.9rem",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "20px",
                        lineHeight: "29px"
                    }}>
                        {criteriongenGenerSkills.map((criteriongenGenerSkill) => (<CriteriongenGenerSkillItem text={criteriongenGenerSkill.Text} criteriongenGenerSkillId={criteriongenGenerSkill.id} />))}

                    </ol>

                    <div style={{ display: "flex", flexDirection: "row", marginLeft: "30px" }}>
                        <button onClick={() => addCriteriongenGenerSkill(criteriongenGenerSkillInput)} className="add_button">                                                <h1 style={{ marginTop: "5px", marginBottom: "5px", textAlign: "center", width: "22px", height: "20px", color: "#4d4d4d", fontSize: "20px" }}>+</h1></button>
                        <div className="transparent_input">

                            <input type="text" onChange={(event) => setCriteriongenGenerSkillInput(event.target.value)} name="name" placeholder="Додати критерій...." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default CriteriongenGenerSkill

function addCriteriongenGenerSkill(criteriongenGenerSkillInput) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("CriteriongenGenerSkill").add({ Text: criteriongenGenerSkillInput })

}