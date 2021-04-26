import React from 'react'
import {Link} from 'react-router-dom'
import './SupervisorTherapistNav.css'

export default function SupervisorTherapistNav() {
    return (
        <>
            <div className="col-6 row justify-content-between">
                <Link
                    to="/"
                    className="role_choice_link supervisor_choice_link col-4 text-align-right"
                >
                    Супервізор
                </Link>
                <Link
                    to="/"
                    className="role_choice_link col-4 text-align-center"
                >
                    Терапіст
                </Link>
            </div>
        </>
    )
}
