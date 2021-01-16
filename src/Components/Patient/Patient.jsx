import app from "../../Firebase/firebase";
import PatientItem from "../PatientItem/PatientItem";
import React from "react";
import Header from "../Header/Header";



function Patient() {
    return (
        <div style={{paddingTop:"20px"}}>
            <Header/>
            <PatientItem/>
            <p onClick={() => app.auth().signOut()} >Logout button</p>
        </div>
    )
}

export default Patient