import { useState, useEffect } from 'react'
import app from '../../Firebase/firebase'
import ProtocolListSuperVisor from './ProtocolList'
import ProtocolListTherapist from './ProtocolListTherapist'

export default function RenderProgramList() {
    let [users, setUsers] = useState([])

    useEffect(() => {
        const db = app.firestore()
        const unsubscribe = db.collection('User').onSnapshot((snapshot) => {
            if (snapshot.size) {
                setUsers(
                    snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }))
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
    users = users.filter((user) => user.id == localStorage.getItem('user'))
    if (users.length == 1) {
        localStorage.setItem('proffesion', users[0].Profession)
    }
    if (localStorage.getItem('proffesion') == 'supervisor') {
        return <ProtocolListSuperVisor />
    } else {
        return <ProtocolListTherapist />
    }
}
