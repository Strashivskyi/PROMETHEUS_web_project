import ProgramHeader from '../Header/ProgramHeader'
import './Program.css'
import './ProgramTest.css'
import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import TreeArrowHeader from '../ArrowHeader/TreeArrowHeader'
import StimulusItem from './ProgramElement/StimulusItem'
import MobileHeader from '../Header/MobileHeader'
import toast, {Toaster} from 'react-hot-toast'

function RemoveCopiedStatus({protocol}) {
    if (protocol.StatusCopied != null) {
        const db = app.firestore()
        db.collection('Users')
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .doc(localStorage.getItem('program'))
            .update({StatusCopied: ''})
    }

    return <></>
}

// MAIN COMPONENT

export default function ProgramEditable() {
    let test = []

    let [stimulus, setStimulus] = useState([])
    let [stimulInput, setStimulInput] = useState('')

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection('Users')
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
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
            .collection('Users')
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
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

                    console.log('Сука ')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    protocols = protocols.filter((protocol) =>
        protocol.id.includes(localStorage.getItem('program'))
    )
    const [fileGenerated, setFileGenerated] = useState(0)

    let userEmail = localStorage.getItem('user')
    let childName = localStorage.getItem('child')

    const exportUsersToExcel = (userEmail, kidName) => {
        fetch(`/files/${userEmail}/${kidName}`).then((data) => {
            setFileGenerated(data.status) // 200
        })
    }
    
    return (
        <>
            <MobileHeader />
            <div style={{margin: '0% 2% 0 2%'}}>
            <ProgramHeader />
            <TreeArrowHeader
                        page={[localStorage.getItem('childName'),'Програма']}
                        
                       
                    />
            </div>
            
            <div >
                <div className="row edit-top">
                   
                    <ul style={{position: 'relative', right: '4%'}}>
                        {protocols.map((protocol) => (
                            <div className="program_big_flex_container">
                                <div
                                    style={{marginBottom: '1rem'}}
                                    className="element_name"
                                >
                                    {' '}
                                    Протокол{' '}
                                    {localStorage.getItem('programNumber')}{' '}
                                    {protocol.StatusCopied}.{' '}
                                    {protocol.SphereOfDevelopment}.{' '}
                                    {protocol.Skill}
                                </div>

                                <RemoveCopiedStatus protocol={protocol} />
                                <div className="each_element_grid_container">
                                    <div
                                        style={{backgroundColor: '#EEEEEE'}}
                                        className="element_name"
                                    >
                                        Сфера розвитку:
                                    </div>

                                    <input
                                        placeholder="Вказати сферу розвитку..."
                                        className="element_value element_value_input_grey"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={
                                            protocol.SphereOfDevelopment
                                        }
                                        raised
                                        theme={{
                                            colors: {background: '#fcfcfc'},
                                        }}
                                        onChange={(e) =>
                                            addSphereOfDevelopment(
                                                e.target.value
                                            )
                                        }
                                    />

                                    <div className="element_name">Навик:</div>
                                    <input
                                        placeholder="Вказати навик..."
                                        className="element_value element_value_input_white"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={protocol.Skill}
                                        raised
                                        theme={{
                                            colors: {background: 'transparent'},
                                        }}
                                        onChange={(e) =>
                                            addSkill(e.target.value)
                                        }
                                    />
                                    <div
                                        style={{backgroundColor: '#EEEEEE'}}
                                        className="element_name"
                                    >
                                        Метод:
                                    </div>
                                    <input
                                        placeholder="Вказати метод..."
                                        className="element_value element_value_input_grey"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={protocol.Method}
                                        raised
                                        theme={{
                                            colors: {background: '#fcfcfc'},
                                        }}
                                        onChange={(e) =>
                                            addMethod(e.target.value)
                                        }
                                    />
                                    <div className="element_name">
                                        Бажана реакція:
                                    </div>
                                    <input
                                        placeholder="Вказати бажану реакцію..."
                                        className="element_value element_value_input_white"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={
                                            protocol.DesirableReaction
                                        }
                                        raised
                                        theme={{
                                            colors: {background: 'transparent'},
                                        }}
                                        onChange={(e) =>
                                            addDesirableReaction(e.target.value)
                                        }
                                    />
                                    <>
                                        <div
                                            style={{
                                                backgroundColor: '#EEEEEE',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                            className="element_name"
                                        >
                                            Критерій узагальнення навику:
                                        </div>
                                        <div
                                            style={{backgroundColor: '#EEEEEE'}}
                                            className="element_value"
                                        >
                                            <div
                                                style={{
                                                    backgroundColor: '#EEEEEE',
                                                }}
                                            >
                                                <input
                                                    placeholder="Вказати критерій..."
                                                    className="element_value element_value_input_grey"
                                                    multiline="true"
                                                    underlineColor="transparent"
                                                    selectionColor="primary"
                                                    defaultValue={
                                                        protocol.CriteriongenGenerSkill
                                                    }
                                                    raised
                                                    theme={{
                                                        colors: {
                                                            background:
                                                                '#fcfcfc',
                                                        },
                                                    }}
                                                    onChange={(e) =>
                                                        addCriteriongenGenerSkill(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </>

                                    <div className="element_name">
                                        Рівні інтенсивності підказки:
                                    </div>
                                    <input
                                        placeholder="Вказати рівні інтенсивності підказки..."
                                        className="element_value element_value_input_white"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={protocol.Interval}
                                        raised
                                        theme={{
                                            colors: {backgroundColor: 'white'},
                                        }}
                                        onChange={(e) =>
                                            addInterval(e.target.value)
                                        }
                                    />

                                    <div
                                        style={{backgroundColor: '#EEEEEE'}}
                                        className="element_name"
                                    >
                                        Критерій зниження рівня інтенсивності
                                        підказки:
                                    </div>
                                    <input
                                        placeholder="Вказати критерій..."
                                        className="element_value element_value_input_grey"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={
                                            protocol.ReductionСriterion
                                        }
                                        raised
                                        theme={{
                                            colors: {background: '#fcfcfc'},
                                        }}
                                        onChange={(e) =>
                                            addReductionСriterion(
                                                e.target.value
                                            )
                                        }
                                    />
                                    <div className="element_name">
                                        Критерій підвищення рівня інтенсивності
                                        підказки:
                                    </div>
                                    <input
                                        placeholder="Вказати критерій..."
                                        className="element_value element_value_input_white"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={
                                            protocol.CriterionIncrease
                                        }
                                        onChange={(e) =>
                                            addCriterionIncrease(e.target.value)
                                        }
                                        raised
                                        theme={{
                                            colors: {background: 'transparent'},
                                        }}
                                    />
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        className="element_name element_value_input_grey"
                                    >
                                        Спосіб забирання підказки:
                                    </div>
                                    <div className="element_value add_stymul_position element_value_input_grey">
                                        <select
                                            defaultValue={
                                                protocol.MethodTakingHint
                                            }
                                            onChange={(event) =>
                                                addMethodTakingHint(
                                                    event.target.value
                                                )
                                            }
                                            className="select_way"
                                        >
                                            <option value="false"></option>
                                            <option value="Тимчасова затримка">
                                                Тимчасова затримка
                                            </option>
                                            <option value="Від найменшої до найбільшої">
                                                Від найменшої до найбільшої
                                            </option>
                                        </select>
                                    </div>

                                    <div
                                        className="element_name"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        Стимули до етапів
                                    </div>
                                    <div
                                        className="element_value"
                                        style={{lineHeight: '2rem'}}
                                    >
                                        <ul>
                                            <li>
                                                {stimulus.map((stimul) => (
                                                    <StimulusItem
                                                        name={stimul.Name}
                                                        stimulId={stimul.id}
                                                    />
                                                ))}
                                            </li>

                                            <li className="add_stymul_container">
                                                <button
                                                    onClick={() =>
                                                        addStimul(stimulInput)
                                                    }
                                                    className="add_stymul_button"
                                                >
                                                    +
                                                </button>

                                                <input
                                                    type="text"
                                                    onChange={(event) =>
                                                        setStimulInput(
                                                            event.target.value
                                                        )
                                                    }
                                                    name="name"
                                                    placeholder="Додати стимул...."
                                                    className="add_stymul_input"
                                                />
                                            </li>
                                        </ul>
                                    </div>

                                    <div
                                        className="element_name"
                                        style={{backgroundColor: '#EEEEEE'}}
                                    >
                                        Опис етапів:
                                    </div>
                                    <input
                                        placeholder="Додати опис етапів..."
                                        className="element_value element_value_input_grey"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={protocol.StepDescription}
                                        raised
                                        theme={{
                                            colors: {background: '#fcfcfc'},
                                        }}
                                        onChange={(event) =>
                                            setStepDescription(
                                                event.target.value
                                            )
                                        }
                                    />
                                    {/*step 1*/}

                                    <div
                                        className="element_name"
                                        style={{backgroundColor: 'white'}}
                                    >
                                        Процедура корекції неправильної
                                        відповіді:
                                    </div>
                                    <input
                                        placeholder="Вказати процедуру корекції неправильної відповіді..."
                                        className="element_value element_value_input_white"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        background="white"
                                        defaultValue={
                                            protocol.CorrectionProcedureStep1
                                        }
                                        onChange={(event) =>
                                            setCorrectionProcedureStep1(
                                                event.target.value
                                            )
                                        }
                                        raised
                                        theme={{
                                            colors: {background: 'white'},
                                        }}
                                    />
                                    {/* <Step1 Instructions1={protocol.Instructions1}/> */}

                                    <div
                                        className="element_name"
                                        style={{backgroundColor: '#EEEEEE'}}
                                    >
                                        Інструкції до етапу 1:
                                    </div>
                                    <input
                                        placeholder="Додати інструкції до етапу..."
                                        className="element_value element_value_input_grey"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={protocol.Instructions1}
                                        onChange={(event) =>
                                            addInstruction1(event.target.value)
                                        }
                                        raised
                                        theme={{
                                            colors: {
                                                background: 'transparent',
                                            },
                                        }}
                                    />
                                    {/*step 2*/}

                                    {/* <Step2 Instructions2={protocol.Instructions2} /> */}
                                    <div className="element_name">
                                        Інструкції до етапу 2 :
                                    </div>
                                    <input
                                        placeholder="Додати інструкції до етапу..."
                                        className="element_value element_value_input_white"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={protocol.Instructions2}
                                        onChange={(event) =>
                                            addInstruction2(event.target.value)
                                        }
                                        raised
                                        theme={{
                                            colors: {
                                                background: 'transparent',
                                            },
                                        }}
                                    />
                                    {/*step 3*/}

                                    {/* <Step3  Instructions3={protocol.Instructions3}/> */}
                                    <div
                                        className="element_name"
                                        style={{backgroundColor: '#EEEEEE'}}
                                    >
                                        Інструкції до етапу 3:
                                    </div>
                                    <input
                                        placeholder="Додати інструкції до етапу..."
                                        className="element_value element_value_input_grey"
                                        multiline="true"
                                        underlineColor="transparent"
                                        selectionColor="primary"
                                        defaultValue={protocol.Instructions3}
                                        onChange={(event) =>
                                            addInstruction3(event.target.value)
                                        }
                                        raised
                                        theme={{
                                            colors: {
                                                background: 'transparent',
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </ul>
                    <button
                        className="save_button_supervisor_mobile btn-background-slide"
                        style={{cursor: 'pointer'}}
                        onClick={() => exportUsersToExcel(userEmail, childName)}
                    >
                        Зберегти файл
                    </button>
                    <div style={{height: '100px'}}></div>
                    <Toaster
                        position="bottom-top"
                        reverseOrder={false}
                        toastOptions={{
                            style: {
                                minWidth: '350px',
                                minHeight: '60px',
                                paddingLeft: '20px',
                            },
                            error: {
                                duration: 5000,
                                icon: '⚠️',
                            },
                        }}
                    />
                </div>{' '}
            </div>
        </>
    )
}

//  -------
// |  END  |
//  -------

function addInstruction1(instructionInput) {
    localStorage.setItem('Instructions1', instructionInput)
}

function addInstruction2(instructionInput) {
    localStorage.setItem('Instructions2', instructionInput)
}

function addInstruction3(instructionInput) {
    localStorage.setItem('Instructions3', instructionInput)
}

function addStimul(stimulInput) {
    const db = app.firestore()
    if (stimulInput != '') {
        db.collection('Users')
            .doc(localStorage.getItem('user'))
            .collection('Supervisors')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .doc(localStorage.getItem('program'))
            .collection('Stimulus')
            .add({Name: stimulInput})
    } else {
        toast.error('Неможливо надіслати пустий стимул')
    }
}

function addSkill(params) {
    localStorage.setItem('Skill', params)
}

function addMethod(params) {
    localStorage.setItem('Method', params)
}

function addDesirableReaction(params) {
    localStorage.setItem('DesirableReaction', params)
}

function addReductionСriterion(params) {
    localStorage.setItem('ReductionСriterion', params)
}

function addCriterionIncrease(params) {
    localStorage.setItem('CriterionIncrease', params)
}

function setStepDescription(params) {
    localStorage.setItem('StepDescription', params)
}

function setCorrectionProcedureStep1(params) {
    localStorage.setItem('CorrectionProcedureStep1', params)
}

function addSphereOfDevelopment(sphereOfDevelopment) {
    localStorage.setItem('SphereOfDevelopment', sphereOfDevelopment)
}

function addInterval(interval) {
    localStorage.setItem('Interval', interval)
}

function addMethodTakingHint(method) {
    localStorage.setItem('MethodTakingHint', method)
}
function addCriteriongenGenerSkill(generSkill) {
    localStorage.setItem('CriteriongenGenerSkill', generSkill)
}
