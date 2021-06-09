import HeaderHomeTemplate from '../Header/HeaderHomeTemplate'

import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import HomeProgramTemplate from './TemplatePages/HomeProgramTemplate'
import HomeProgramTemplatePublic from './TemplatePages/HomeProgramTemplatePublic'
function HomeTemplate(params) {
    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('user'))
            .collection('CreateTemplate')
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProtocols(
                        snapshot.docs.map((doc) => ({
                            ...doc.data(),
                            id: doc.id,
                        }))
                    )
                    console.log('Сука')
                } else {
                    console.log('Сука1')
                }
            })
        return () => {
            unsubscribe()
        }
    }, [])
    console.log('БЛЯЯЯЯЯ' + protocols.length)

    return (
        <>
            <HeaderHomeTemplate />
   
            <RenderTemplateType
                protocols={protocols}
                type={localStorage.getItem('templateType')}
            />
        </>
    )
}

export default HomeTemplate
function RenderTemplateType({protocols, type}) {
    if (type == 'private') {
        return (
            <>
                <HomeProgramTemplate countProto={protocols.length} />
            </>
        )
    }
    if (type == 'public') {
        return (
            <>
                <HomeProgramTemplatePublic countProto={protocols.length} />
            </>
        )
    }
}
