import React from 'react'
import './SupervisorTherapistNav.css'

export default function SupervisorTherapistNav() {
    return (
        <>
            <div className="col-12 col-md-6 row justify-content-between">
                <span
                    onClick={() => (
                        localStorage.setItem('proffesion', 'Supervisors'),
                        window.location.reload()
                    )}
                    className="role_choice_link col-6 col-md-4 supervisor_choice_link"
                >
                    Супервізор
                </span>
                <span
                    onClick={() => (
                        localStorage.setItem('proffesion', 'Therapists'),
                        window.location.reload()
                    )}
                    className="role_choice_link col-6 col-md-4 therapist_choice_link"
                >
                    Терапіст
                </span>
            </div>
        </>
    )
}
