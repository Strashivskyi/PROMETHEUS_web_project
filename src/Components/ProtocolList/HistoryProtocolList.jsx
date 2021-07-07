import './ProtocolList.css'
import React, {useEffect, useState} from 'react'
import app from '../../Firebase/firebase'
import HistoryProtocolItem from './PageComponent/HistoryProtocolItem'
import Header from '../Header/Header'
import ArrowHeader from './PageComponent/ArrowHeader'
import Popup from '../ModalWindow/Popup'
import MobileHeader from '../Header/MobileHeader'
import {BsPlusCircle} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import TreeArrowHeader from '../ArrowHeader/TreeArrowHeader'

export default function HistoryProtocolList() {
    
    const [protocols, setProtocols] = useState([])
    useEffect(() => {
        const db = app.firestore()
        const unsubscribe =   db.collection("Users")
        .doc(localStorage.getItem('user'))
        .collection("Supervisors")
        .doc(localStorage.getItem('child'))
        .collection("History")
        .doc(localStorage.getItem("DateHistory"))
        .collection("protocols")
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

    let protocolsNumber = []
    for (let i = 0; i < protocols.length; i++) {
        protocolsNumber.push(i + 1)
    }
    console.log(protocolsNumber)
    return (
        <>
            <MobileHeader />
            <Header />
            <TreeArrowHeader  page={[localStorage.getItem('childName'),'Історія']}/>
            <div className="create_element">
                {protocolsNumber.map((protocol) => (
                    <>
                        <div>
                            <HistoryProtocolItem
                              
                                number={protocol}
                                
                                sphereOfDevelopment={
                                    protocols[protocol - 1].SphereOfDevelopment
                                }
                                length={protocols.length}
                                skill={protocols[protocol - 1].Skill}
                                
                            />
                        </div>
                    </>
                ))}
               
            </div>
        </>
    )
}

