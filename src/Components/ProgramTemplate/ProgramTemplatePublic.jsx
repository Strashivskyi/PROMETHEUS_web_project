import './ProgramTemplate.css'
import Delete from '../../assets/delete.svg'
import {Link} from 'react-router-dom'
import {withRouter, Redirect} from 'react-router'
import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import Header from '../Header/Header'
import AHeader from './PageComponentTemplate/AHeader'
import TemplateItem from './PageComponentTemplate/ItemPublic'
import './ButtonsTemplate'
import ButtonsTemplate from '../ProgramTemplate/ButtonsTemplate'

function ProgramTemplate({history}) {
    const [programTemplates, setProgramTemplates] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
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
            <Header />
            <AHeader />
            <div className="template_title">
                <div className="templates_string">
                    {' '}
                    Створити програму на основі шаблону серед наведених нижче
                    АБО
                </div>
                <Link className="template_link" to="/protocol-list">
                    Створити пусту програму
                </Link>
            </div>
            <ButtonsTemplate />
            <div className="template-grid">
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
export default withRouter(ProgramTemplate)
