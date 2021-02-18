import Delete from '../../../../assets/delete.png'

import React from 'react'
import app from '../../../../Firebase/firebase'
function CriteriongenGenerSkillItem({ text, criteriongenGenerSkillId }) {
    return (
        <>
            <li>
                <div className="step_grid_container">
                    <div>{text}</div>
                    <img
                        onClick={() =>
                            DeleteCriteriongenGenerSkill(
                                criteriongenGenerSkillId
                            )
                        }
                        src={Delete}
                        height="15"
                        style={{
                            marginLeft: '30px',
                            marginRight: '30px',
                            marginTop: '9px',
                            color: '#EEEEEE',
                        }}
                    />
                </div>
            </li>
        </>
    )
}
export default CriteriongenGenerSkillItem
function DeleteCriteriongenGenerSkill(criteriongenGenerSkillId) {
    const db = app.firestore()
    db.collection('User')
        .doc(localStorage.getItem('user'))
        .collection('Patient')
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .collection('CriteriongenGenerSkill')
        .doc(criteriongenGenerSkillId)
        .delete()
}
