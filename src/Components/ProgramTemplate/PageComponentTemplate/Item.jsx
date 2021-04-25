import Delete from '../../../assets/trash.svg'
import './Items.css'
import app from '../../../Firebase/firebase'
import React, {useEffect, useState} from 'react'
function TemplateItem({ number, date,history}) {


    const [programTemplates, setProgramTemplates] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db.collection("Users")
        .doc(localStorage.getItem('user'))
        .collection("Supervisors")
        .doc(localStorage.getItem('child'))
        .collection("History").doc(date).collection("protocols")
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProgramTemplates(
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
    return (
        <>
            <div id="template" className="template_place" style={{height:"12.5rem"}}>
                <div className="template_program_name">Програма: {number}</div>
                <div className="grid_display_diagnosis">
                    <div className="template_date">Дата створення/редагування:</div>
                    <div className="template_date_value">{date}</div>
                </div>
                <div className="grid_display_numbers">
        
                    <div className="template_protocols">
                        Кількість протоколів:
                    </div>
                    <div className="template_protocols_value">{programTemplates.length}</div>
                </div>
                <div className="template_buttons_container">
                    <img
                        className="template_img"
                        // onClick={() => DeleteTemplate(idTemplate)}
                        src={Delete}
                    ></img>
                    <button
                        className="choose_template_button"
                        onClick={() =>
                            GoToHistory(history,date)
                        }
                    >
                        переглянути
                    </button>
                </div>
            </div>
        </>
    )
}
export default TemplateItem

function GoToHistory(history,date) {
    
    history.push('/history-protocol-list')
    localStorage.setItem("DateHistory",date)
}

