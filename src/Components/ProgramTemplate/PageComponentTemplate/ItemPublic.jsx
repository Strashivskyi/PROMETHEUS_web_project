import Delete from '../../../assets/delete.svg'
import './Items.css'
import app from '../../../Firebase/firebase'

function TemplateItem({diagnos, age, count, number, idTemplate, history}) {
    return (
        <>
            <div id="template" className="template_place">
                <div className="template_program_name">Програма: {number}</div>
                <div className="grid_display_diagnosis">
                    <div className="template_date">Діагноз:</div>
                    <div className="template_date_value">{diagnos}</div>
                </div>
                <div className="grid_display_numbers">
                    <div className="template_age white_back">Вік:</div>
                    <div className="template_age_value white_back">{age}</div>
                    <div className="template_protocols">
                        Кількість протоколів:
                    </div>
                    <div className="template_protocols_value">{count}</div>
                </div>
                <div className="template_buttons_container">
                    <div></div>
                    <button
                        className="choose_template_button"
                        onClick={() =>
                            CreateDuplicateTemplate(idTemplate, history)
                        }
                    >
                        Обрати
                    </button>
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
            .collection('ProgramTemplates')
            .doc(idTemplate)
            .collection('protocols')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    snapshot.docs.map((doc) => {
                        db.collection(localStorage.getItem('proffesion'))
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
