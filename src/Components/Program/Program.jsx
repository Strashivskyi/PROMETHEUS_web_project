import ProgramHeader from "../Header/ProgramHeader";
import "./Program.css"
import Step1 from "./ProgramElement/ProgramStep/Step1";


import React, { useEffect, useState } from "react";
import app from "../../Firebase/firebase";
import ArrowHeader from "./ProgramElement/ArrowHeader";
import CriteriongenGenerSkill from "./ProgramElement/CriteriongenGenerSkillElement/CriteriongenGenerSkill";
import StimulusItem from "./ProgramElement/StimulusItem";
import Step2 from "./ProgramElement/ProgramStep/Step2";
import Step3 from "./ProgramElement/ProgramStep/Step3";




function RemoveCopiedStatus({ protocol }) {
    if (protocol.StatusCopied != null) {
        const db = app.firestore();
        db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ StatusCopied: "" })

    }

    return (<></>)
}

function SingleProgram() {

    let [stimulus, setStimulus] = useState([]);
    let [stimulInput, setStimulInput] = useState("")


    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Stimulus").get();
            setStimulus(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        };
        setTimeout(() => { fetchData() }, 2000);
        console.log("1")

    }, [stimulus, setStimulus]);



    let [protocols, setProtocols] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();
            const data = await db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").get();
            setProtocols(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

        };
        setTimeout(() => { fetchData() }, 2000);
        console.log("1")
    }, [protocols, setProtocols]);
    protocols = protocols.filter(protocol => protocol.id.includes(localStorage.getItem("program")))


    return (
        <>
            <ProgramHeader />
            <div className="program_upper_flex_container">
                <ArrowHeader />
            </div>
            <ul>


                {
                    protocols.map((protocol) => (

                        <div className="program_big_flex_container">
                            <div className="element_name"> Протокол {protocol.ProtocolId} {protocol.StatusCopied}. {protocol.SphereOfDevelopment}. {protocol.Skill}</div>
                            <RemoveCopiedStatus protocol={protocol} />
                            <div className="each_element_grid_container">

                                <div style={{ backgroundColor: "#EEEEEE" }} className="element_name">Сфера розвитку</div>
                                <div style={{ backgroundColor: "#EEEEEE" }} className="element_value">{protocol.SphereOfDevelopment}</div>
                                <div style={{ marginTop: "1rem" }} className="element_name">Навик:</div>
                                <div style={{ marginTop: "1rem" }} className="element_value">{protocol.Skill}</div>
                                <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Метод:</div>
                                <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_value">{protocol.Method}</div>
                                <div style={{ marginTop: "1rem" }} className="element_name">Бажана реакція:</div>
                                <div style={{ marginTop: "1rem" }} className="element_value">{protocol.DesirableReaction}</div>

                                <CriteriongenGenerSkill />
                                <div style={{ marginTop: "1rem" }} className="element_name">Рівні інтенсивності підказки:</div>
                                <div style={{ marginTop: "1rem", }} className="element_value">Оберіть інтервал часу або тип виконання:<select onChange={(event) => addInterval(event.target.value)} style={{
                                    marginLeft: "0.5rem", background: "#F8FCFF",
                                    border: "2px solid #CCE9FF",
                                    boxSizing: "border-box",
                                    height: "52px",
                                    fontSize: "24px",
                                    lineHeight: "29px",
                                    padding: "10px"
                                }}>
                                    <option value="0">0 секунд</option>
                                    <option value="2">2 секунди</option>
                                    <option value="4">4 секунди</option>
                                    <option value="6">6 секунд</option>
                                    <option value="Самостійна реакція">Самостійна реакція</option>
                                </select>

                                </div>
                                <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Критерій зниження рівня інтенсивності підказки:</div>
                                <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_value">{protocol.ReductionСriterion}</div>
                                <div style={{ marginTop: "1rem" }} className="element_name">Критерій підвищення рівня інтенсивності підказки:</div>
                                <div style={{ marginTop: "1rem" }} className="element_value">{protocol.CriterionIncrease}</div>
                                <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name">Спосіб забирання підказки:</div>
                                <div style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }} className="element_name"><select onChange={(event) => addMethodTakingHint(event.target.value)} style={{
                                    marginLeft: "0.5rem", background: "#F8FCFF",
                                    border: "2px solid #CCE9FF",
                                    boxSizing: "border-box",
                                    height: "52px",
                                    fontSize: "24px",
                                    lineHeight: "29px",
                                }}>

                                    <option value="Тимчасова затримка">Тимчасова затримка</option>
                                    <option value="Від найменшої до найбільшої">Від найменшої до найбільшої</option>
                                </select></div>
                                <div className="element_name">Стимули до етапів</div>
                                <div className="element_value">
                                    <ul>

                                        {stimulus.map((stimul) => (<StimulusItem name={stimul.Name} stimulId={stimul.id} />))}

                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <button onClick={() => addStimul(stimulInput)} className="add_button">
                                                <h1 style={{ marginTop: "5px", marginBottom: "5px", textAlign: "center", width: "30px", color: "#4d4d4d" }}>+</h1>
                                            </button>
                                            <div className="transparent_input">
                                                <input type="text" onChange={(event) => setStimulInput(event.target.value)} name="name" placeholder="Додати стимул...." />
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                                <div className="element_name" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Опис етапів</div>
                                <div className="element_value" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>{protocol.StepDescription} </div>
                                {/*step 1*/}
                                <div className="element_name">Етап 1</div>
                                <div className="element_value"></div>
                                <div className="element_name" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                                <div className="element_value" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}> {protocol.CorrectionProcedureStep1}  </div>
                                <Step1 />
                                {/*step 2*/}
                                <div className="element_name">Етап 2</div>
                                <div className="element_value"></div>
                                <div className="element_name" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                                <div className="element_value" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>{protocol.CorrectionProcedureStep2}</div>
                                <Step2 />
                                {/*step 3*/}
                                <div className="element_name">Етап 3</div>
                                <div className="element_value"></div>
                                <div className="element_name" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                                <div className="element_value" style={{ marginTop: "1rem", backgroundColor: "#EEEEEE" }}>{protocol.CorrectionProcedureStep3}</div>
                                <Step3 />
                            </div>

                        </div>


                    ))}




            </ul>

        </>

    );
};
export default SingleProgram;

function addStimul(stimulInput) {
    const db = app.firestore();

    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Stimulus").add({ Name: stimulInput })

}

function addInterval(interval) {
    const db = app.firestore();

    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ Interval: interval })

}


function addMethodTakingHint(method) {
    const db = app.firestore();

    db.collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ MethodTakingHint: method })

}