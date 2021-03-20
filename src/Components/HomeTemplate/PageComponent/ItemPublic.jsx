import Delete from '../../../assets/delete.svg'

import app from '../../../Firebase/firebase'

function TemplateItem({ diagnos, age, count, number, idTemplate, history }) {
    return (
        <>
            <div id="template" className="template_place">
                <div
                    className="template_categories"
                    onClick={() => (moreInfoTemplate(idTemplate,history))} 
                    // onClick={() => CreateDuplicateTemplate(idTemplate, history)}
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
function moreInfoTemplate(id,history) {
    localStorage.setItem("templateIdMore",id)
    history.push("/template-more-info")
}


// function CreateDuplicateTemplate(idTemplate, history) {
//     const db = app.firestore()

//     console.log(
//         db
//             .collection('ProgramTemplates')
//             .doc(idTemplate)
//             .collection('protocols')
//             .onSnapshot((snapshot) => {
//                 if (snapshot.size) {
//                     snapshot.docs.map((doc) => {
//                         db.collection(localStorage.getItem("proffesion"))
//                             .doc(localStorage.getItem('user'))
//                             .collection('Patient')
//                             .doc(localStorage.getItem('child'))
//                             .collection('Protocols')
//                             .add(doc.data())
//                         console.log(doc.data())
//                     })

//                     console.log('Сука ')
//                 } else {
//                     console.log(
//                         'Error in Components/ProgramTemplate/PageComponentTemplate/Item.jsx'
//                     )
//                 }
//             })
//     )
//     history.push('/protocol-list')
// }
