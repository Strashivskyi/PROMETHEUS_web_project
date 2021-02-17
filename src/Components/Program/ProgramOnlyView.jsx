import React, { useEffect, useState } from 'react'
import app from '../../Firebase/firebase'
import ProgramHeader from '../Header/ProgramHeader'
import { TextInput } from 'react-native-paper'
import ArrowHeader from './ProgramElement/ArrowHeader'
import CriteriongenSkill from './ProgramElement/CriteriongenGenerSkillElement/CriterionSkill'
import StimulusItem from './ProgramElement/StimulusItem'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import './Program.css'

const theme = {
    ...DefaultTheme,
    roundness: 0,
    colors: {
        ...DefaultTheme.colors,
        primary: 'transparent',
        accent: 'transparent',
        dark: 'true',
    },
}

function RemoveCopiedStatus({ protocol }) {
    if (protocol.StatusCopied != null) {
        const db = app.firestore()
        db.collection('User')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .doc(localStorage.getItem('program'))
            .update({ StatusCopied: '' })
    }

    return <></>
}

// MAIN COMPONENT

export default function ProgramOnlyView() {
    let [stimulus, setStimulus] = useState([])
    let [stimulInput, setStimulInput] = useState('')

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection('User')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .doc(localStorage.getItem('program'))
            .collection('Stimulus')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setStimulus(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                    console.log('Сука ')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    let [protocols, setProtocols] = useState([])

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

                    console.log('Ok')
                } else {
                    console.log('Error in Program/ProgramOnlyView')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    // let [stimulus1, setStimulus1] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const db = app.firestore()
    //         test.map((t)=>{
    //         const data = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(t).collection("Stimulus").get()
    //         setStimulus1(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    //         console.log(stimulus1)
    //         console.log("Сукаaaaaaaaa ")
    //     })}
    //     fetchData()
    // }, [stimulus1, setStimulus1])

    protocols = protocols.filter((protocol) =>
        protocol.id.includes(localStorage.getItem('program'))
    )

    return (
        <PaperProvider theme={theme}>
            <>
                <ProgramHeader />
                <ArrowHeader />
                <ul style={{ position: 'relative', right: '4%' }}>
                    {protocols.map((protocol) => (
                        <div className="program_big_flex_container">
                            <div
                                style={{ marginBottom: '1rem' }}
                                className="title_name"
                            >
                                {' '}
                                Протокол {protocol.ProtocolId}{' '}
                                {protocol.StatusCopied}.{' '}
                                {protocol.SphereOfDevelopment}. {protocol.Skill}
                            </div>
                            <RemoveCopiedStatus protocol={protocol} />
                            <div className="each_element_grid_container">
                                <div
                                    style={{ backgroundColor: '#EEEEEE' }}
                                    className="element_name"
                                >
                                    Сфера розвитку:
                                </div>
                                <div
                                    className="element_value"
                                    multiline="true"
                                    underlineColor="transparent"
                                    selectionColor="primary"
                                    style={{
                                        fontSize: '20px',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                >
                                    {protocol.SphereOfDevelopment}
                                </div>

                                <div
                                    style={{ marginTop: '1rem' }}
                                    className="element_name"
                                >
                                    Навик:
                                </div>
                                <div
                                    className="element_value"
                                    underlineColor="transparent"
                                    selectionColor="primary"
                                    style={{
                                        fontSize: '20px',
                                        marginTop: '1rem',
                                    }}
                                >
                                    {protocol.Skill}
                                </div>
                                <div
                                    className="element_name"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    style={{ backgroundColor: '#EEEEEE' }}
                                    className="element_name"
                                >
                                    Метод:
                                </div>
                                <div
                                    className="element_value"
                                    underlineColor="transparent"
                                    selectionColor="primary"
                                    style={{
                                        fontSize: '20px',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                >
                                    {protocol.Method}
                                </div>
                                <div
                                    className="element_name"
                                    style={{ paddingTop: '1rem' }}
                                >
                                    Бажана реакція:
                                </div>
                                <div
                                    className="element_value"
                                    underlineColor="transparent"
                                    selectionColor="primary"
                                    style={{
                                        fontSize: '20px',
                                        paddingTop: '1rem',
                                    }}
                                >
                                    {protocol.DesirableReaction}
                                </div>
                                <div
                                    className="element_name"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <CriteriongenSkill />
                                <div
                                    className="element_name"
                                    style={{
                                        minHeight: '1rem',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{
                                        minHeight: '1rem',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                ></div>
                                <div
                                    className="element_name"
                                    style={{ paddingTop: '1rem' }}
                                >
                                    Рівні інтенсивності підказки:
                                </div>
                                <div
                                    className="element_value"
                                    style={{ paddingTop: '1rem' }}
                                >
                                    {protocol.Interval}
                                    <div
                                        className="element_name"
                                        style={{ minHeight: '1rem' }}
                                    ></div>
                                    <div
                                        className="element_value"
                                        style={{ minHeight: '1rem' }}
                                    ></div>
                                </div>
                                <div
                                    style={{ backgroundColor: '#EEEEEE' }}
                                    className="element_name"
                                >
                                    Критерій зниження рівня інтенсивності
                                    підказки:
                                </div>
                                <div
                                    className="element_value"
                                    style={{
                                        fontSize: '20px',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                >
                                    {protocol.ReductionСriterion}
                                </div>
                                <div
                                    className="element_name"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div className="element_name">
                                    Критерій підвищення рівня інтенсивності
                                    підказки:
                                </div>
                                <div
                                    className="element_value"
                                    style={{ fontSize: '20px' }}
                                >
                                    {protocol.CriterionIncrease}
                                </div>
                                <div
                                    className="element_name"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    style={{
                                        backgroundColor: '#EEEEEE',
                                        paddingTop: '1rem',
                                    }}
                                    className="element_name"
                                >
                                    Спосіб забирання підказки:
                                </div>
                                <div
                                    style={{
                                        backgroundColor: '#EEEEEE',
                                        paddingTop: '1rem',
                                    }}
                                    className="element_value"
                                >
                                    {protocol.MethodTakingHint}
                                </div>
                                <div
                                    className="element_name"
                                    style={{
                                        minHeight: '1rem',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{
                                        minHeight: '1rem',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                ></div>
                                <div
                                    className="element_name"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{ minHeight: '1rem' }}
                                ></div>

                                <div className="element_name">
                                    Стимули до етапів
                                </div>
                                <div
                                    className="element_value"
                                    style={{ lineHeight: '18px' }}
                                >
                                    <ul>
                                        {stimulus.map((stimul) => (
                                            <li>
                                                <div className="stymul_grid_container">
                                                    <div>{stimul.Name}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div
                                    className="element_name"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{ minHeight: '1rem' }}
                                ></div>

                                <div
                                    className="element_name"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    Опис етапів:
                                </div>
                                <div
                                    className="element_value"
                                    style={{
                                        fontSize: '20px',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                >
                                    {protocol.StepDescription}
                                </div>
                                {/*step 1*/}
                                <div
                                    className="element_name"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{ minHeight: '1rem' }}
                                ></div>
                                <div className="element_name">Етап 1</div>
                                <div className="element_value"></div>
                                <div
                                    className="element_name"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    Процедура корекції неправильної відповіді:
                                </div>
                                <div
                                    className="element_value"
                                    multiline="true"
                                    underlineColor="transparent"
                                    selectionColor="primary"
                                    style={{
                                        fontSize: '20px',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                >
                                    {protocol.CorrectionProcedureStep1}
                                </div>
                                {/* <Step1 Instructions1={protocol.Instructions1}/> */}

                                <div className="element_name">
                                    Інструкції до етапу:
                                </div>
                                <div className="element_value">
                                    <div
                                        className="element_value"
                                        placeholder={protocol.Instructions1}
                                        style={{ fontSize: '20px' }}
                                    >
                                        {protocol.Instructions1}
                                    </div>
                                </div>
                                {/*step 2*/}
                                <div className="element_name">Етап 2</div>
                                <div className="element_value"></div>
                                <div
                                    className="element_name"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    Процедура корекції неправильної відповіді:
                                </div>
                                <div
                                    className="element_value"
                                    multiline="true"
                                    underlineColor="transparent"
                                    selectionColor="primary"
                                    style={{
                                        fontSize: '20px',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                >
                                    {protocol.CorrectionProcedureStep2}
                                </div>
                                {/* <Step2 Instructions2={protocol.Instructions2} /> */}
                                <div className="element_name">
                                    Інструкції до етапу:
                                </div>
                                <div className="element_value">
                                    <div
                                        className="element_value"
                                        style={{ fontSize: '20px' }}
                                    >
                                        {protocol.Instructions2}
                                    </div>
                                </div>
                                {/*step 3*/}
                                <div className="element_name">Етап 3</div>
                                <div className="element_value"></div>
                                <div
                                    className="element_name"
                                    style={{ backgroundColor: '#EEEEEE' }}
                                >
                                    Процедура корекції неправильної відповіді:
                                </div>
                                <div
                                    className="element_value"
                                    style={{
                                        fontSize: '20px',
                                        backgroundColor: '#EEEEEE',
                                    }}
                                >
                                    {protocol.CorrectionProcedureStep3}
                                </div>
                                {/* <Step3  Instructions3={protocol.Instructions3}/> */}
                                <div className="element_name">
                                    Інструкції до етапу:
                                </div>
                                <div className="element_value">
                                    <div
                                        className="element_value"
                                        style={{ fontSize: '20px' }}
                                    >
                                        {protocol.Instructions3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
                <div style={{ height: '100px' }}></div>
            </>
        </PaperProvider>
    )
}

//  -------
// |  END  |
//  -------

function addInstruction1(instructionInput) {
    const db = app.firestore()
    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ Instructions1: instructionInput })
}

function addInstruction2(instructionInput) {
    const db = app.firestore()
    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ Instructions2: instructionInput })
}

function addInstruction3(instructionInput) {
    const db = app.firestore()
    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ Instructions3: instructionInput })
}

function addStimul(stimulInput) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .collection('Stimulus')
        .add({ Name: stimulInput })
    setTimeout(() => {
        window.location.reload()
    }, 300)
}
function addSkill(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ Skill: params })
    console.log(params)
}

function addMethod(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ Method: params })
    console.log(params)
}
function addDesirableReaction(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ DesirableReaction: params })
    console.log(params)
}

function addReductionСriterion(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ ReductionСriterion: params })
    console.log(params)
}

function addCriterionIncrease(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ CriterionIncrease: params })
    console.log(params)
}

function setStepDescription(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ StepDescription: params })
    console.log(params)
}
function setCorrectionProcedureStep3(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ CorrectionProcedureStep3: params })
    console.log(params)
}
function setCorrectionProcedureStep2(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ CorrectionProcedureStep2: params })
    console.log(params)
}
function setCorrectionProcedureStep1(params) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ CorrectionProcedureStep1: params })
    console.log(params)
}

function addSphereOfDevelopment(sphereOfDevelopment) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ SphereOfDevelopment: sphereOfDevelopment })
    console.log(sphereOfDevelopment)
}

function addInterval(interval) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ Interval: interval })
}

function addMethodTakingHint(method) {
    const db = app.firestore()

    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .update({ MethodTakingHint: method })
}
