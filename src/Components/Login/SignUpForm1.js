import React from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import DataPicker from './DataPicker'

function SignUpForm1() {
    return (
        <div>
            <LoginNavigation />
            <form className="form-itself">
                <p className="personal_text">Особиста інформація</p>
                <div className="input_text_name">
                    <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="Ім'я"
                    />
                </div>
                <div className="input_text_name">
                    <input
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
                        <input
                            className="gender_checks"
                            type="checkbox"
                            id="xd"
                        />
                        <label for="xd">Чоловіча</label>
                    </div>

                    <div className="group">
                        <input type="checkbox" id="figma" className="gender_checks"/>
                        <label for="figma">Жіноча</label>
                    </div>

                    <div className="group">
                        <input type="checkbox" id="sketch" className="gender_checks"/>
                        <label for="sketch">Інше</label>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SignUpForm1
