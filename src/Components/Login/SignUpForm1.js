import React, { useState } from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import DataPicker from './DataPicker'

import app from "../../Firebase/firebase";

function SignUpForm1() {
    const [firstName, setFirstName] = useState("")
    console.log(firstName)
    const[lastName, setLastName] = useState("")
    console.log(lastName) 
    const [sex, setSex] = useState("")
    console.log(sex)
    return (
        <div>
            <LoginNavigation />
            <form className="form-itself">
                <p className="personal_text">Особиста інформація</p>
                <div className="input_text_name">
                    <input onChange={(event)=> (setFirstName(event.target.value))}
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Ім'я"
                    />
                </div>
                <div className="input_text_name">
                    <input onChange={(event)=> (setLastName(event.target.value))}
                        type="text"
                        id="lname"
                        name="lastname"
                        placeholder="Прізвище"
                    />
                </div>
                <div className="birthday_date">
                    Вкажіть вашу дату народження:
                </div>
                <div className="birthday_date_picker">
                    <DataPicker />
                </div>
                <p className="gender">Стать</p>
                <div className="gender_container">
                    <div className="group">
                        <input onChange={(event)=> (setSex(event.target.value))}
                            className="gender_checks"
                            type="checkbox"
                            id="xd"
                        />
                        <label for="xd">Чоловіча</label>
                    </div>

                    <div className="group">
                        <input onChange={(event)=> (setSex(event.target.value))} type="checkbox" id="figma" className="gender_checks"/>
                        <label for="figma">Жіноча</label>
                    </div>

                    <div className="group">
                        <input onChange={(event)=> (setSex(event.target.value))} type="checkbox" id="sketch" className="gender_checks"/>
                        <label for="sketch">Інше</label>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SignUpForm1
// function addFirstInputRegistr(firstName,lastName,sex) {
//     const db = app.firestore();
//     db.collection("User").doc(localStorage.getItem("user")).set({Name: firstName, Surname: lastName, Gender: sex})
// }