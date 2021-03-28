import {Link} from 'react-router-dom'
import {withRouter, Redirect} from 'react-router'
import React, {useEffect, useState} from 'react'
import app from '../../../Firebase/firebase'
import TemplateItem from '../PageComponent/Item'
import ButtonsTemplate from '../TemplatePages/ButtonsTemplate'
import './HomeProgramTemplate.css'
import Plus from '../../../assets/Plus.svg'
import MobileHeader from '../../Header/MobileHeader'


function HomeProgramTemplate({history, countProto}) {
    const [programTemplates, setProgramTemplates] = useState([])
    localStorage.setItem('homeType', 'createTemplate')
    let btnText = 'Створити шаблон з нуля'
    if (countProto != 0) {
        btnText = 'Cтворити шаблон'
    }
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('user'))
            .collection('ProgramTemplates')
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
    let someList = []
    for (let i = 0; i < programTemplates.length; i++) {
        someList.push(i + 1)
    }
    console.log(someList)

    return (
        <>
            <MobileHeader/>
            <Link to="/#/home" className="mobile_home_link">Пацієнти</Link>
            <ButtonsTemplate />
            <div className="template-grid">
                <div className="create_template_ingrid_button">
                    <div className="add_template">
                        <div className="create_template_text">{btnText}</div>
                        <Link to="/create-template">
                            <img className="plus_sign_button" src={Plus}></img>
                        </Link>
                    </div>
                </div>
                {someList.map((idEl) => (
                    <TemplateItem
                        history={history}
                        idTemplate={programTemplates[idEl - 1].id}
                        number={idEl}
                        diagnos={programTemplates[idEl - 1].Diagnos}
                        age={programTemplates[idEl - 1].Age}
                        count={programTemplates[idEl - 1].CountOfProtocol}
                    />
                ))}
            </div>
        </>
    )
}
export default withRouter(HomeProgramTemplate)
