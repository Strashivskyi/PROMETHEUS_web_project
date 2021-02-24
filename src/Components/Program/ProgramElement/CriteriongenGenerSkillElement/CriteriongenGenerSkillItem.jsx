import Delete from '../../../../assets/delete.png'
import '../../Program.css'
import React from 'react'
import app from '../../../../Firebase/firebase'
function CriteriongenGenerSkillItem({ text, criteriongenGenerSkillId }) {
    return (
        <div className="criterions">
            <li>
                <div class="step_grid_container">
                    <div>{text}</div>
                    <img
                        onClick={() =>
                            DeleteCriteriongenGenerSkill(
                                criteriongenGenerSkillId
                            )
                        }
                        src={Delete}
                        height="15"
                        className="delete_criterion"

                    />
                </div>
            </li>
        </div>
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
