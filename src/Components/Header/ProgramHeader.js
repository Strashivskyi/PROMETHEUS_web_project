import React, { useState, useEffect } from 'react'
import Logo from '../../assets/Logo.svg'
import './ProgramHeader.css'

import app from '../../Firebase/firebase'

// const exportUsersToExcel = require('./exportService');




// const users = [
//     {
//         id: 1,


//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 2,


//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 3,


//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 4,


//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 5,

//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 6,

//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 7,

//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 8,


//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 9,


//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
//     {
//         id: 10,


//         stym: ['', '', '', '', '', '', '', '', ''],
//         instr1: '',
//         instr2: '',
//         instr3: '',
//         bool_field: 0
//     },
// ];

// users[1].bool_field = 0
// const workSheetColumnName = [
//     "Number",
//     "Text1",
//     "Text2",
//     "Text3",
//     "Stymul1",
//     "Stymul2",
//     "Stymul3",
//     "Stymul4",
//     "Stymul5",
//     "Stymul6",
//     "Stymul7",
//     "Stymul8",
//     "Stymul9",
//     "Instructions for first difficulty level ->",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "Instructions for second difficulty level ->",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "Instructions for third difficulty level ->",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "",
//     "some boolean field"

// ]

// const workSheetName = 'Users';
// const filePath = './outputFiles/Book1.xls';



function signOut() {
    localStorage.setItem("user", 'none')
    app.auth().signOut()

}
function ProgramHeader() {


    // let [protocols, setProtocols] = useState([]);



    // useEffect(() => {
    //     const db = app.firestore();
    //     const unsubscribe = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols")
    //         .onSnapshot(snapshot => {
    //             if (snapshot.size) {

    //                 setProtocols(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    //                 console.log("Сука ")
    //             } else {
    //                 console.log("Сука1")
    //             }
    //         })
    //     return () => {
    //         unsubscribe()
    //     }
    // }, [])

 



    // let [stimulus, setStimulus] = useState('');
    // useEffect(() => {
    //     const db = app.firestore();
    //     let j = 0
    //     JSON.parse(localStorage.getItem("protoID")).map((protoId) => {

    //         users[j].stym1 = ''
    //         console.log(protoId)

    //         const unsubscribe = db.collection("User").doc(localStorage.getItem("user")).collection("Patient").doc(localStorage.getItem("child")).collection("Protocols").doc(protoId).collection("Stimulus")
    //             .onSnapshot(snapshot => {
    //                 if (snapshot.size) {
    //                     let i = 0
    //                     setStimulus(snapshot.docs.map(doc => {
    //                         users[j].stym[i] = doc.data().Name
    //                         i++
    //                     }));
    //                     console.log(j)
    //                 } else {
    //                     console.log("Сука1")
    //                 }
    //                 j += 1
    //             })
    //         return () => {
    //             unsubscribe()
    //         }

    //     })


    // }, [])




    return (
        <>
                <div className="header">
                    <img
                        src={Logo}
                        onClick={() => signOut()}
                        width="220"
                        style={{ position: 'relative',
                        left: '4%',
                        marginTop: '1.1%',
                        marginBottom: "-20px" }}
                    />
                    <div style={{ position: "absolute", top: "0.9%", left: "20%" }}>
                        <button className="save_button btn-background-slide" style={{ top: '1rem', cursor: "pointer" }} 
                        // onClick={() => (
                        //     exportUsersToExcel(users, workSheetColumnName, workSheetName, filePath, protocols))}
                            >
                            Зберегти
                        </button>
                    </div>
                </div>
                <hr
                    style={{
                        border: 'none',
                        borderBottom: ' 1px solid #6F6F6F',
                        position: 'relative',
                        top: '1.5rem',
                        left: '1.7%',
                        width: '93.2%',
                        marginBottom: '2rem',
                        marginRight: '4.5rem'
                    }}
                />
        </>
    )
}

export default ProgramHeader;
