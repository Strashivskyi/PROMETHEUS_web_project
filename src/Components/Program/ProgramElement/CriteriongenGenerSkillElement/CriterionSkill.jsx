import React, { useEffect, useState } from 'react'
import app from '../../../../Firebase/firebase'
import '../../Program.css'

export default function CriteriongenSkill({CriteriongenSkill}) {
    let [criteriongenGenerSkills, setCriteriongenGenerSkills] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection('User')
            .doc(localStorage.getItem('user'))
            .collection('Patient')
            .doc(localStorage.getItem('child'))
            .collection('Protocols')
            .doc(localStorage.getItem('program'))
            .collection('CriteriongenGenerSkill')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setCriteriongenGenerSkills(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                } else {
                    console.log('error in criterion skill in program')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            <div
                style={{ backgroundColor: '#EEEEEE' }}
                className="element_name"
            >
                Критерій узагальнення навику:{' '}
            </div>
            <div
                style={{ backgroundColor: '#EEEEEE' }}
                className="element_value"
            >
                <div style={{ backgroundColor: '#EEEEEE' }}>
                    <ol
                        style={{
                            fontFamily: 'Inter',
                            marginLeft: '-0.9rem',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: '20px',
                            lineHeight: '29px',
                            marginTop: '10px',
                        }}
                    >
                        {criteriongenGenerSkills.map(
                            (criteriongenGenerSkill) => (
                                <li>
                                    <div className="step_grid_container">
                                        <div>{criteriongenGenerSkill.Text}</div>
                                    </div>
                                </li>
                            )
                        )}
                    </ol>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginLeft: '30px',
                        }}
                    ></div>
                </div>
            </div>
        </>
    )
}
