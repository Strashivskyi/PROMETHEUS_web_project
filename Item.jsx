import Delete from '../../../assets/delete.svg'

import app from '../../../Firebase/firebase'

function TemplateItem({ diagnos, age, count, number, idTemplate, history }) {
    return (
        <>
            <div id="template" className="template_place">
                <img
                    className="template_img"
                    onClick={() => DeleteTemplate(idTemplate)}
                    src={Delete}
                ></img>

                <div
                    className="template_categories"
                    onClick={() => CreateDuplicateTemplate(idTemplate, history)}
                >
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

function CreateDuplicateTemplate(idTemplate, history) {
    const db = app.firestore()

    console.log(
        db
            .collection(localStorage.getItem("proffesion"))
            .doc(localStorage.getItem('user'))
            .collection('ProgramTemplates')
            .doc(idTemplate)
            .collection('protocols')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    snapshot.docs.map((doc) => {
                        db.collection(localStorage.getItem("proffesion"))
                            .doc(localStorage.getItem('user'))
                            .collection('Patient')
                            .doc(localStorage.getItem('child'))
                            .collection('Protocols')
                            .add(doc.data())
                        console.log(doc.data())
                    })

                    console.log('Сука ')
                } else {
                    console.log(
                        'Error in Components/ProgramTemplate/PageComponentTemplate/Item.jsx'
                    )
                }
            })
    )
    history.push('/protocol-list')
}



function DeleteTemplate(idTemplate) {
    const db = app.firestore()
    db.collection(localStorage.getItem("proffesion"))
        .doc(localStorage.getItem('user'))
        .collection('ProgramTemplates')
        .doc(idTemplate)
        .delete()
}
