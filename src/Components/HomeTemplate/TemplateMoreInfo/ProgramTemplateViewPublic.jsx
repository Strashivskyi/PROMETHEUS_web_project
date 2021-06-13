import React, {useEffect, useState} from 'react'
import app from '../../../Firebase/firebase'

import ArrowHeaderTemplate from './ArrowHeaderTemplate'
import HeaderHomeTemplate from '../../Header/HeaderHomeTemplate'
import MobileHeader from '../../Header/MobileHeader'

// MAIN COMPONENT

export default function ProgramTemplateViewPublic() {
    let [stimulus, setStimulus] = useState([])

    let [protocols, setProtocols] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db

            .collection('ProgramTemplates')
            .doc(localStorage.getItem('templateIdMore'))
            .collection('protocols')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocols(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                    console.log('yeah')
                } else {
                    console.log(
                        'error in ProtocolList/ProtocolListTherapist.js'
                    )
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    protocols = protocols.filter((protocol) =>
        protocol.id.includes(localStorage.getItem('program'))
    )

    return (
            <>
                <MobileHeader />
                <HeaderHomeTemplate />
                <ArrowHeaderTemplate />

                <ul style={{position: 'relative', right: '4%'}}>
                    {protocols.map((protocol) => (
                        <div className="program_big_flex_container">
                            <div
                                style={{marginBottom: '1rem'}}
                                className="title_name"
                            >
                                {' '}
                                Протокол {localStorage.getItem(
                                    'programNumber'
                                )}{' '}
                                {protocol.StatusCopied}.{' '}
                                {protocol.SphereOfDevelopment}. {protocol.Skill}
                            </div>

                            <div className="each_element_grid_container">
                                <div
                                    style={{backgroundColor: '#EEEEEE'}}
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
                                    style={{marginTop: '1rem'}}
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
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div
                                    style={{backgroundColor: '#EEEEEE'}}
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
                                    style={{paddingTop: '1rem'}}
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
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <>
                                    <div
                                        style={{backgroundColor: '#EEEEEE'}}
                                        className="element_name"
                                    >
                                        Критерій узагальнення навику:{' '}
                                    </div>
                                    <div
                                        style={{backgroundColor: '#EEEEEE'}}
                                        className="element_value"
                                    >
                                        <div
                                            style={{backgroundColor: '#EEEEEE'}}
                                        >
                                            {protocol.CriteriongenGenerSkill}
                                        </div>
                                    </div>
                                </>
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
                                    style={{paddingTop: '1rem'}}
                                >
                                    Рівні інтенсивності підказки:
                                </div>
                                <div
                                    className="element_value"
                                    style={{paddingTop: '1rem'}}
                                >
                                    {protocol.Interval}
                                    <div
                                        className="element_name"
                                        style={{minHeight: '1rem'}}
                                    ></div>
                                    <div
                                        className="element_value"
                                        style={{minHeight: '1rem'}}
                                    ></div>
                                </div>
                                <div
                                    style={{backgroundColor: '#EEEEEE'}}
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
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div className="element_name">
                                    Критерій підвищення рівня інтенсивності
                                    підказки:
                                </div>
                                <div
                                    className="element_value"
                                    style={{fontSize: '20px'}}
                                >
                                    {protocol.CriterionIncrease}
                                </div>
                                <div
                                    className="element_name"
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{minHeight: '1rem'}}
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
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{minHeight: '1rem'}}
                                ></div>

                                <div className="element_name">
                                    Стимули до етапів
                                </div>
                                <div
                                    className="element_value"
                                    style={{lineHeight: '18px'}}
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
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{minHeight: '1rem'}}
                                ></div>

                                <div
                                    className="element_name"
                                    style={{backgroundColor: '#EEEEEE'}}
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
                                    style={{minHeight: '1rem'}}
                                ></div>
                                <div
                                    className="element_value"
                                    style={{minHeight: '1rem'}}
                                ></div>

                                <div
                                    className="element_name"
                                    style={{backgroundColor: 'white'}}
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
                                        backgroundColor: 'white',
                                    }}
                                >
                                    {protocol.CorrectionProcedureStep1}
                                </div>
                                {/* <Step1 Instructions1={protocol.Instructions1}/> */}

                                <div
                                    className="element_name"
                                    style={{backgroundColor: '#EEEEEE'}}
                                >
                                    Інструкції до етапу 1:
                                </div>
                                <div className="element_value">
                                    <div
                                        className="element_value"
                                        placeholder={protocol.Instructions1}
                                        style={{
                                            fontSize: '20px',
                                            backgroundColor: '#EEEEEE',
                                        }}
                                    >
                                        {protocol.Instructions1}
                                    </div>
                                </div>
                                {/*step 2*/}

                                {/* <Step2 Instructions2={protocol.Instructions2} /> */}
                                <div className="element_name">
                                    Інструкції до етапу 2:
                                </div>
                                <div className="element_value">
                                    <div
                                        className="element_value"
                                        style={{fontSize: '20px'}}
                                    >
                                        {protocol.Instructions2}
                                    </div>
                                </div>
                                {/*step 3*/}

                                {/* <Step3  Instructions3={protocol.Instructions3}/> */}
                                <div
                                    className="element_name"
                                    style={{backgroundColor: '#EEEEEE'}}
                                >
                                    Інструкції до етапу3:
                                </div>
                                <div className="element_value">
                                    <div
                                        className="element_value"
                                        style={{
                                            backgroundColor: '#EEEEEE',
                                            fontSize: '20px',
                                        }}
                                    >
                                        {protocol.Instructions3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
                <div style={{height: '100px'}}></div>
            </>
    )
}

//  -------
// |  END  |
//  -------
