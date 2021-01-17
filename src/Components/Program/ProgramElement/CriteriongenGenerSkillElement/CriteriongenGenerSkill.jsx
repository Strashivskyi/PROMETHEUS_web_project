import Delete from "../../../../assets/delete.png";
import CriteriongenGenerSkillItem from "./CriteriongenGenerSkillItem";
import React, { useEffect, useState } from "react";
import app from "../../../../Firebase/firebase";

function CriteriongenGenerSkill() {

    let [criteriongenGenerSkills, setCriteriongenGenerSkills] = useState([]);
    let [criteriongenGenerSkillInput, setCriteriongenGenerSkillInput] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("CriteriongenGenerSkill").get();
            setCriteriongenGenerSkills(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        };
        setTimeout(() => { fetchData() }, 2000);
        console.log("1")

    }, [criteriongenGenerSkills, setCriteriongenGenerSkills]);


    return (
        <>
            <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Критерій узагальнення навику: </div>
            <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_value">
                <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>
                    <ol style={{
                        fontFamily: "Inter", marginTop: "0.3rem", marginLeft: "-0.9rem",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: "24px",
                        lineHeight: "29px"
                    }}>
                        {criteriongenGenerSkills.map((criteriongenGenerSkill) => (<CriteriongenGenerSkillItem text={criteriongenGenerSkill.Text} criteriongenGenerSkillId={criteriongenGenerSkill.id} />))}

                    </ol>

                    <div style={{ display: "flex", flexDirection: "row", marginLeft: "20px" }}>
                        <button onClick={() => addCriteriongenGenerSkill(criteriongenGenerSkillInput)} className="add_button"><h1 style={{ marginTop: "5px", marginBottom: "5px", textAlign: "center", width: "30px", color: "#4d4d4d" }}>+</h1></button>
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

    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("CriteriongenGenerSkill").add({ Text: criteriongenGenerSkillInput })

}