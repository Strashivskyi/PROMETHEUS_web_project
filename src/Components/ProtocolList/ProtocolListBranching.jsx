import { useState, useEffect } from 'react'
import app from '../../Firebase/firebase'
import ProtocolListSuperVisor from './ProtocolList'
import ProtocolListTherapist from './ProtocolListTherapist'

export default function RenderProgramList() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db.collection(localStorage.getItem('proffesion')).onSnapshot((snapshot) => {
            if (snapshot.size) {
                setUsers(
                    snapshot.docs.filter((user) => user.id == localStorage.getItem('user')).map((doc) => {
                        localStorage.setItem('proffesion',doc.data().Profession)
                    })
                )
                console.log('success')
            } else {
                console.log('error')
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])
    if (localStorage.getItem('proffesion') == 'User') {
        return <ProtocolListSuperVisor />
    } else {
        return <ProtocolListTherapist />
    }
}
