import ProgramHeader from "../Header/ProgramHeader";
import "./Program.css"
import Step1 from "./ProgramElement/ProgramStep/Step1";
import { TextInput } from 'react-native-paper';

import React, { useEffect, useState } from "react";
import app from "../../Firebase/firebase";
import ArrowHeader from "./ProgramElement/ArrowHeader";
import CriteriongenGenerSkill from "./ProgramElement/CriteriongenGenerSkillElement/CriteriongenGenerSkill";
import StimulusItem from "./ProgramElement/StimulusItem";
import Step2 from "./ProgramElement/ProgramStep/Step2";
import Step3 from "./ProgramElement/ProgramStep/Step3";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    roundness: 0,
    colors: {
        ...DefaultTheme.colors,
        primary: 'transparent',
        accent: 'transparent',
        dark: "true"
    },
};


function RemoveCopiedStatus({ protocol }) {
    if (protocol.StatusCopied != null) {
        const db = app.firestore();
        db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ StatusCopied: "" })

    }

    return (<></>)
}
function name() {



}

function SingleProgram() {

    let [stimulus, setStimulus] = useState([]);
    let [stimulInput, setStimulInput] = useState("")

    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Stimulus")
            .onSnapshot(snapshot => {
                if (snapshot.size) {

                    setStimulus(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука ")
                } else {
                    console.log("Сука1")
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])





    let [protocols, setProtocols] = useState([]);



    useEffect(() => {
        const db = app.firestore();
        const unsubscribe = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols")
            .onSnapshot(snapshot => {
                if (snapshot.size) {

                    setProtocols(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
                    console.log("Сука ")
                } else {
                    console.log("Сука1")
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    protocols = protocols.filter(protocol => protocol.id.includes(localStorage.getItem("program")))


    return (
        <PaperProvider theme={theme}>
            <>
                <ProgramHeader />
                <ArrowHeader />
                <ul style={{ position: "relative", right: "4%" }}>


                    {
                        protocols.map((protocol) => (

                            <div className="program_big_flex_container">
                                <div style={{ marginBottom: "1rem" }} className="element_name"> Протокол {protocol.ProtocolId} {protocol.StatusCopied}. {protocol.SphereOfDevelopment}. {protocol.Skill}</div>
                                <RemoveCopiedStatus protocol={protocol} />
                                <div className="each_element_grid_container">

                                    <div style={{ backgroundColor: "#EEEEEE" }} className="element_name">Сфера розвитку:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        placeholder={protocol.SphereOfDevelopment}
                                        style={{ fontSize: "20px" }}
                                        raised theme={{ colors: { background: '#fcfcfc' } }}
                                        onChange={(e) => addSphereOfDevelopment(e.target.value)}

                                    />

                                    <div style={{ marginTop: "1rem" }} className="element_name">Навик:</div>
                                    <TextInput

                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.Skill}
                                        style={{ fontSize: "20px", marginTop: "1rem" }}
                                        raised theme={{ colors: { background: 'transparent' } }}
                                        onChange={(e) => addSkill(e.target.value)}

                                    />
                                    <div className="element_name" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem" }}></div>
                                    <div style={{ backgroundColor: "#EEEEEE" }} className="element_name">Метод:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.Method}
                                        style={{ fontSize: "20px" }}
                                        raised theme={{ colors: { background: '#fcfcfc' } }}
                                        onChange={(e) => addMethod(e.target.value)}

                                    />
                                    <div className="element_name" style={{ paddingTop: "1rem" }} >Бажана реакція:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.DesirableReaction}
                                        style={{ fontSize: "20px", paddingTop: "1rem" }}
                                        raised theme={{ colors: { background: 'transparent' } }}
                                        onChange={(e) => addDesirableReaction(e.target.value)}

                                    />
                                    <div className="element_name" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem" }}></div>
                                    <CriteriongenGenerSkill />
                                    <div className="element_name" style={{ minHeight: "1rem", backgroundColor: "#EEEEEE" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem", backgroundColor: "#EEEEEE" }}></div>
                                    <div className="element_name" style={{ paddingTop: "1rem" }}>Рівні інтенсивності підказки:</div>
                                    <div className="element_value" style={{ paddingTop: "1rem" }}>Оберіть інтервал часу або тип виконання:<select onChange={(event) => addInterval(event.target.value)} style={{
                                        marginLeft: "0.5rem", background: "#F8FCFF",
                                        border: "2px solid #CCE9FF",
                                        boxSizing: "border-box",
                                        height: "40px",
                                        fontSize: "20px",
                                        lineHeight: "20px",
                                        paddingLeft: "10px"
                                    }}>
                                        <option value="0">0 секунд</option>
                                        <option value="2">2 секунди</option>
                                        <option value="4">4 секунди</option>
                                        <option value="6">6 секунд</option>
                                        <option value="Самостійна реакція">Самостійна реакція</option>
                                    </select>
                                        <div className="element_name" style={{ minHeight: "1rem" }}></div>
                                        <div className="element_value" style={{ minHeight: "1rem" }}></div>
                                    </div>
                                    <div style={{ backgroundColor: "#EEEEEE" }} className="element_name">Критерій зниження рівня інтенсивності підказки:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.ReductionСriterion}
                                        style={{ fontSize: "20px" }}
                                        raised theme={{ colors: { background: '#fcfcfc' } }}
                                        onChange={(e) => addReductionСriterion(e.target.value)}

                                    />
                                    <div className="element_name" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_name">Критерій підвищення рівня інтенсивності підказки:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.CriterionIncrease}
                                        onChange={(e) => addCriterionIncrease(e.target.value)}
                                        style={{ fontSize: "20px" }}
                                        raised theme={{ colors: { background: 'transparent' } }}
                                    />
                                    <div className="element_name" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem" }}></div>
                                    <div style={{ backgroundColor: "#EEEEEE", paddingTop: "1rem" }} className="element_name">Спосіб забирання підказки:</div>
                                    <div style={{ backgroundColor: "#EEEEEE", paddingTop: "1rem" }} className="element_value"><select onChange={(event) => addMethodTakingHint(event.target.value)} style={{
                                        marginLeft: "-1rem", background: "#F8FCFF",
                                        border: "2px solid #CCE9FF",
                                        boxSizing: "border-box",
                                        height: "40px",
                                        fontSize: "20px",
                                        lineHeight: "20px",
                                        paddingLeft: "10px"
                                    }}>

                                        <option value="Тимчасова затримка">Тимчасова затримка</option>
                                        <option value="Від найменшої до найбільшої">Від найменшої до найбільшої</option>
                                    </select></div>
                                    <div className="element_name" style={{ minHeight: "1rem", backgroundColor: "#EEEEEE" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem", backgroundColor: "#EEEEEE" }}></div>
                                    <div className="element_name" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem" }}></div>


                                    <div className="element_name">Стимули до етапів</div>
                                    <div className="element_value" style={{ lineHeight: "18px" }}>
                                        <ul>

                                            {stimulus.map((stimul) => (<StimulusItem name={stimul.Name} stimulId={stimul.id} />))}

                                            <div style={{ display: "flex", flexDirection: "row", }}>
                                                <button onClick={() => addStimul(stimulInput)} className="add_button">
                                                    <h1 style={{ marginTop: "5px", marginBottom: "5px", textAlign: "center", width: "22px", height: "20px", color: "#4d4d4d", fontSize: "20px" }}>+</h1>
                                                </button>
                                                <div className="transparent_input">
                                                    <input type="text" onChange={(event) => setStimulInput(event.target.value)} name="name" placeholder="Додати стимул...." />
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="element_name" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem" }}></div>

                                    <div className="element_name" style={{ backgroundColor: "#EEEEEE" }}>Опис етапів:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.StepDescription}
                                        style={{ fontSize: "20px" }}
                                        raised theme={{ colors: { background: '#fcfcfc' } }}
                                        onChange={(event) => setStepDescription(event.target.value)}
                                    />
                                    {/*step 1*/}
                                    <div className="element_name" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_value" style={{ minHeight: "1rem" }}></div>
                                    <div className="element_name">Етап 1</div>
                                    <div className="element_value"></div>
                                    <div className="element_name" style={{ backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.CorrectionProcedureStep1}
                                        onChange={(event) => setCorrectionProcedureStep1(event.target.value)}
                                        style={{ fontSize: "20px" }}
                                        raised theme={{ colors: { background: '#fcfcfc' } }}
                                    />
                                    <Step1 />
                                    {/*step 2*/}
                                    <div className="element_name">Етап 2</div>
                                    <div className="element_value"></div>
                                    <div className="element_name" style={{ backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.CorrectionProcedureStep2}
                                        onChange={(event) => setCorrectionProcedureStep2(event.target.value)}
                                        style={{ fontSize: "20px" }}
                                        raised theme={{ colors: { background: '#fcfcfc' } }}
                                    />
                                    <Step2 />
                                    {/*step 3*/}
                                    <div className="element_name">Етап 3</div>
                                    <div className="element_value"></div>
                                    <div className="element_name" style={{ backgroundColor: "#EEEEEE" }}>Процедура корекції неправильної відповіді:</div>
                                    <TextInput
                                        className="element_value"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"

                                        placeholder={protocol.CorrectionProcedureStep3}
                                        onChange={(event) => setCorrectionProcedureStep3(event.target.value)}
                                        style={{ fontSize: "20px" }}
                                        raised theme={{ colors: { background: '#fcfcfc' } }}
                                    />
                                    <Step3 />
                                </div>

                            </div>


                        ))}




                </ul>
                <div style={{ height: "100px" }}></div>

            </>
        </PaperProvider>
    );
};
export default SingleProgram;




function addStimul(stimulInput) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).collection("Stimulus").add({ Name: stimulInput })

}
function addSkill(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ Skill: params })
    console.log(params)
}

function addMethod(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ Method: params })
    console.log(params)
}
function addDesirableReaction(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ DesirableReaction: params })
    console.log(params)
}

function addReductionСriterion(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ ReductionСriterion: params })
    console.log(params)
}

function addCriterionIncrease(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ CriterionIncrease: params })
    console.log(params)
}

function setStepDescription(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ StepDescription: params })
    console.log(params)

}
function setCorrectionProcedureStep3(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ CorrectionProcedureStep3: params })
    console.log(params)

}
function setCorrectionProcedureStep2(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ CorrectionProcedureStep2: params })
    console.log(params)

}
function setCorrectionProcedureStep1(params) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ CorrectionProcedureStep1: params })
    console.log(params)

}

function addSphereOfDevelopment(sphereOfDevelopment) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ SphereOfDevelopment: sphereOfDevelopment })
    console.log(sphereOfDevelopment)
}

function addInterval(interval) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ Interval: interval })

}


function addMethodTakingHint(method) {
    const db = app.firestore();

    db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(localStorage.getItem("program")).update({ MethodTakingHint: method })

}