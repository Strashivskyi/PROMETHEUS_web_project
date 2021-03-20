import Delete from '../../../assets/delete.svg'

import app from '../../../Firebase/firebase'

function TemplateItem({ diagnos, age, count, number, idTemplate, history }) {
    return (
        <>
            <div onClick={() => (moreInfoTemplate(idTemplate,history))} id="template" className="template_place">

                <div className="template_categories">
                    <img
                        className="template_img"
                        onClick={() => DeleteTemplate(idTemplate)}
                        src={Delete}
                    > 
                    </img>

                    <div className="template_program">Програма: {number}</div>
                    <div className="template_diagnos">Діагноз: {diagnos}</div>
                    <div className="template_age">Вік: {age}</div>
                    <div className="template_protocols">
                        Кількість протоколів: {count}
                    </div>
                </div>
            </div>
        </>
    )
}
export default TemplateItem
function moreInfoTemplate(id,history) {
    localStorage.setItem("templateIdMore",id)
    history.push("/template-more-info")
}


function DeleteTemplate(idTemplate) {
    const db = app.firestore()
    db.collection(localStorage.getItem("proffesion"))
        .doc(localStorage.getItem('user'))
        .collection('ProgramTemplates')
        .doc(idTemplate)
        .delete()
}
