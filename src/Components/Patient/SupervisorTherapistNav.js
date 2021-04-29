import React from 'react'
import {Link} from 'react-router-dom'
import './SupervisorTherapistNav.css'

export default function SupervisorTherapistNav() {
    return (
        <>
            <div className="col-6 row justify-content-between">
                <span
                         onClick={()=>(localStorage.setItem("proffesion","Supervisors"),window.location.reload())}
                  
                    className="role_choice_link supervisor_choice_link col-4 text-align-right"
                >
                    Супервізор
                </span>
                <span
                 
                 onClick={()=>(localStorage.setItem("proffesion","Therapists"),window.location.reload())}
                    className="role_choice_link col-4 text-align-center"
                >
                    Терапіст
                </span>
            </div>
        </>
    )
}
