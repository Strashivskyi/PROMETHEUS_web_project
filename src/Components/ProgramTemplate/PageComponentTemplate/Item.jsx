import Delete from '../../../assets/trash.svg'
import "./Items.css"
import app from '../../../Firebase/firebase'

function TemplateItem({ diagnos, age, count, number, idTemplate, history }) {
    return (
        <>
            <div  id="template" className="template_place">
                


                <div className="template_program_name">Програма: {number}</div>
                <div className="grid_display_diagnosis">
                <div className="template_diagnos">Діагноз:</div><div className="template_diagnos_value">{diagnos}</div>
                </div>
                <div className="grid_display_numbers">
                <div className="template_age white_back">Вік:</div><div className="template_age_value white_back">{age}</div>
                <div className="template_protocols">Кількість протоколів:</div><div className="template_protocols_value">{count}</div>
                </div>
            <div className="template_buttons_container">
            <img 
                className="template_img"
                onClick={() => DeleteTemplate(idTemplate)}
                src={Delete}
            ></img>
            <button className="choose_template_button" onClick={() => CreateDuplicateTemplate(idTemplate, history)}>Обрати</button>
            
            </div>
        </div>F
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
