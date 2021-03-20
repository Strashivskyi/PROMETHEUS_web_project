import { Link } from 'react-router-dom'
import { withRouter, Redirect } from 'react-router'
import React, { useEffect, useState } from 'react'
import app from '../../../Firebase/firebase'
import TemplateItem from '../PageComponent/ItemPublic'
import ButtonsTemplate from '../../HomeTemplate/TemplatePages/ButtonsTemplate'

function HomeProgramTemplatePublic({history,countProto}) {
    const [programTemplates, setProgramTemplates] = useState([])
    let btnText="Створити шаблон з нуля"
    if(countProto!=0){
        btnText="Продовжіть створення шаблону"
    }
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
            <div className="template_title">
                <div className="templates_string">
                    {' '}
                     Переглянути шаблони програм АБО
                </div>
                <Link style={{width:"25%"}}  className="template_link" to="/create-template" >
                   {btnText}
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
export default withRouter(HomeProgramTemplatePublic)
