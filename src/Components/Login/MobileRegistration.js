import './MobileRegistration.css'
import React, { useState } from 'react'
import DataPicker from './DataPicker'


function MobileRegistration() {
    const [firstName, setFirstName] = useState('')
    localStorage.setItem('Name', firstName)
    console.log(firstName)
    const [lastName, setLastName] = useState('')
    localStorage.setItem('Surname', lastName)
    console.log(lastName)
    const [sex, setSex] = useState('')
    localStorage.setItem('Gender', sex)
    console.log(sex)
    return (
        <>
        <div className="mobile_registration">  
            <div className="sign-up-text-mobile">Реєстрація</div>
            <div className="input_form">
            <div>Ім'я</div>
            <div className="input_text_name_mobile">
                    <input
                        onChange={(event) => setLastName(event.target.value)}
                        type="text"
                        id="lname"
                        name="lastname"
                    />
                </div>
            </div>
        </div>
        
        </>
    )
}

export default MobileRegistration;
