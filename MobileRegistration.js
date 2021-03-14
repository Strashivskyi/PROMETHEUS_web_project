import './MobileRegistration.css';
import DataPicker from './DataPicker';
import {Link} from 'react-router-dom';
import SwitchSelector from 'react-switch-selector';
import React, { useState, useEffect } from 'react';
import Upload from '../../assets/Vector.svg'
import $ from 'jquery'

function MobileRegistration() {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        if (selectedFile) {
            setPreview(undefined)
            $('#div1').remove()
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    const options = [
        {
            label: 'Супервізор',
            value: {
                role: 'Supervisors',
            },
        },
        {
            label: 'Терапіст',
            value: {
                role: 'Therapists',
            },
        },
    ]
    
    const onChange = (newValue) => {
        localStorage.setItem('proffesion', newValue.role)
        console.log(newValue.role)
    }
    localStorage.setItem("proffesion","Supervisors")
    const [firstName, setFirstName] = useState('')
    localStorage.setItem('Name', firstName)
    console.log(firstName)
    const [lastName, setLastName] = useState('')
    localStorage.setItem('Surname', lastName)
    console.log(lastName)
    const [sex, setSex] = useState('')
    localStorage.setItem('Gender', sex)
    console.log(sex)
    const [country, setCountry] = useState('')
    localStorage.setItem('Country', country)
    console.log(country)
    const [city, setCity] = useState('')
    localStorage.setItem('City', city)
    console.log(city)
    const [phone, setPhoneNumber] = useState('')
    localStorage.setItem('PhoneNumber', phone)
    console.log(phone)
    const [email, setEmail] = useState('')
    localStorage.setItem('userEmail', email)
    console.log(email)
    return (
        <div className="mobile_lightblue_background">
        <div className="mobile_registration">  

           
            <div className="sign-up-text-mobile">Реєстрація</div>
            
            <div className="input_form">
            <div className="mobile_registration_label_centre">Оберіть вашу роль</div>
            <div
                style={{
                    width: '50vw',
                    height: '10vw',
                    paddingTop: '5vw',
                    paddingBottom: '5vw',

                    fontSize: '4vw',
                    textAlign: 'center',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                }}
            >
                <SwitchSelector
                    onChange={onChange}
                    options={options}
                    backgroundColor={'#48535F'}
                    fontColor={'#FFFFFF'}
                    selectedFontColor={'#48535F'}
                    selectionIndicatorMargin="4"
                    wrapperBorderRadius="8"
                    optionBorderRadius="7"
                    fontSize="15px"
                    selectedBackgroundColor="#FFFFFF"
                />
            </div>
            <div className="mobile_registration_label">Ім'я</div>
            <div className="input_text_mobile input_name">
                    <input
                        onChange={(event) => setFirstName(event.target.value)}
                        type="text"
                        id="fname"
                        name="firstname"
                    />
                </div>
                <div className="mobile_registration_label">Прізвище</div>
                <div className="input_text_mobile input_name">
                    <input
                        onChange={(event) => setLastName(event.target.value)}
                        type="text"
                        id="lname"
                        name="lastname"
                    />
                </div>
                <div className="mobile_registration_label_centre birthday_mobile">Ваша дата народження</div>
                <div className="birthday_date_picker_mobile">
                    <DataPicker />
                </div>
                <div className="mobile_registration_label_centre gender_up">Оберіть вашу стать</div>
                <div className="gender_container_mobile gender_down">
                    <div className="group_mobile">
                        <input
                            onClick={() => setSex('Чоловіча')}
                            className="gender_checks_mobile"
                            type="checkbox"
                            id="xd"
                        />
                        <label for="xd">Чоловіча</label>
                    </div>

                    <div className="group_mobile">
                        <input
                            onClick={() => setSex('Жіноча')}
                            type="checkbox"
                            id="figma"
                            className="gender_checks_mobile"
                        />
                        <label for="figma">Жіноча</label>
                    </div>

                    <div className="group_mobile">
                        <input
                            onClick={() => setSex('Інше')}
                            type="checkbox"
                            id="sketch"
                            className="gender_checks_mobile"
                        />
                        <label for="sketch">Інше</label>
                    </div>
                </div>
                <div className="custom_image_input">
                    <label for="image_input">
                        <img
                            src={Upload}
                            height="25"
                            style={{
                                cursor: 'pointer',
                                marginLeft: '25px',
                                marginRight: '15px',
                                marginTop: '9px',
                                color: '#EEEEEE',
                            }}
                        />
                        <span className="download_image" id="file-chosen">
                            Завантажити
                        </span>
                        <hr />
                    </label>
                    <input
                        type="file"
                        id="image_input"
                        onChange={onSelectFile}
                    />
                </div>
                <div className="mobile_registration_label">Країна</div>
                <div className="input_text_mobile input_country">
                    <input
                        onChange={(event) => setCountry(event.target.value)}
                        type="text"
                        id="fname"
                        name="firstname"
                    />
                </div>
                <div className="mobile_registration_label">Місто</div>
                <div className="input_text_mobile input_city">
                    <input
                        onChange={(event) => setCity(event.target.value)}
                        type="text"
                        id="fname"
                        name="firstname"
                    />
                </div>
                <div className="mobile_registration_label">Email</div>
                <div className="input_text_mobile input_email">
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="text"
                        id="fname"
                        name="email"
                    />
                </div>
                <div className="mobile_registration_label">Пароль</div>
                <div className="input_text_mobile input_password">
                    <input
                        type="text"
                        id="lname"
                        name="password"
                    />
                </div>
                <div className="mobile_registration_label">Підтвердження паролю</div>
                <div className="input_text_mobile input_password">
                    <input
                        type="text"
                        id="lname"
                        name="passwordCheck"
                    />
                </div>
                <div className="mobile_registration_label">Номер телефону</div>
                <div className="input_text_mobile input_phone">
                    <input
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        type="text"
                        id="lname"
                        name="phone"
                    />
                </div>
                <input
                            class="slide-hover-left-3_mobile"
                            type="submit"
                            value="Зареєструватись"
                        />
                </div>
                <div className="already_acc">
                        <span className="already_acc_text">
                            Вже маєте акаунт? &nbsp;&nbsp;&nbsp;
                        </span>{' '}
                        <Link className="signin_link" to="/">
                            Залогуватись
                        </Link>
                    </div>


                
            </div>
        </div>
        
    )
}

export default MobileRegistration;
