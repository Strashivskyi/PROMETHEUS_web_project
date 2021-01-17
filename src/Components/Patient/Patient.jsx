import app from "../../Firebase/firebase";
import PatientItem from "../PatientItem/PatientItem";
import React from "react";
import Header from "../Header/Header";



function Patient() {
    return (
        <>
            <Header />

            <PatientItem />

        </>
    )
}

export default Patient