import app from '../../Firebase/firebase'
import "./VBMapp.css"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import HeaderHomeTemplate from '../Header/HeaderHomeTemplate'
import Stage from './ProgramElement/Stage'
function VBMapp() {

    let [program, setProgram] = useState([])

    useEffect(() => {
        // /VB-MAPP_protocol/Манд/protocol
        const db = app.firestore()
        const unsubscribe = db
            .collection("Users")
            .doc(localStorage.getItem('user'))
            .collection(localStorage.getItem('proffesion'))
            .doc(localStorage.getItem('child'))
            .collection("VB-MAPP_protocol")
            .orderBy("prior", "asc")
            .onSnapshot((snapshot) => {
                if (snapshot.size) {
                    setProgram(
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
    return (<>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <HeaderHomeTemplate />
            <div className="program-main-block" style={{ overflowY: 'scroll' }}>
                {program.map((elementProgram) => (
                    <div style={{ display: "flex", flexDirection: "column", margin: "0% 2%" }}>
                        <span className="program-element" style={{ margin: "25% 0 " }}>{elementProgram.id}</span>
                        <Stage id={elementProgram.id} />

                    </div>
                ))}
            </div>
            <Link style={{ textDecoration: "none", alignSelf: "center" }} to="/protocol-list">
                <div
                    class="go-to-program"

                >

                    <span class="go-to-program-text">Перейти до програми</span>

                </div>
            </Link>

        </div>


    </>)
}
export default VBMapp