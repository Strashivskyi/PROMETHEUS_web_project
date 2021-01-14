import app from "../../Firebase/firebase";
import PatientItem from "../PatientItem/PatientItem";
import React from "react";
import Header from "../Header/Header";



function Patient() {
    return (
        <>
            <Header/>

            <PatientItem/>
            <p onClick={() => app.auth().signOut()} >Logout button</p>
        </>
    )
}

export default Patient