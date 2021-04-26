import React, {useState} from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import Person from '../../assets/person_signup.svg'
import Calendar from '../../assets/calendar.svg'
import Caret from '../../assets/CaretRight.svg'
import './SignUp.css'
import './../Authentification/SignIn2.css'

function SignUpForm1() {
    localStorage.setItem('step', 1)
    const [firstName, setFirstName] = useState('')
    localStorage.setItem('Name', firstName)
    console.log(firstName)
    const [lastName, setLastName] = useState('')
    localStorage.setItem('Surname', lastName)
    console.log(lastName)
    const [sex, setSex] = useState('')
    localStorage.setItem('Gender', sex)
    console.log(sex)

    const [formData, setFormData] = useState({
        isAgree: false,
        gender: '',
    })

    const handleChanage = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        setFormData({
            ...formData,
            [name]: value,
        })
        console.log(target.value)
    }

    return (
        <div class="container">
            <div class="row justify-content-center">
                <LoginNavigation class="col-6 signup1_nav" />
                <form className="form-itself col-12 row justify-content-center">
                    <div className="col-12 row justify-content-center ">
                        <div class="col-10 col-md-7 row input-image first-signup-content">
                            <img
                                src={Person}
                                alt="person image"
                                className="col-2"
                            />
                            <input
                                onChange={(event) =>
                                    setFirstName(event.target.value)
                                }
                                type="text"
                                id="fname"
                                name="firstname"
                                placeholder="Ім'я"
                                className="transparent-input col-10"
                            />
                            <hr className="input_line signin-input-line col-12" />
                        </div>
                        <div class="col-10 col-md-7 row input-image ">
                            <img
                                src={Person}
                                alt="person image"
                                className="col-2"
                            />
                            <input
                                onChange={(event) =>
                                    setLastName(event.target.value)
                                }
                                type="text"
                                id="lname"
                                name="lastname"
                                placeholder="Прізвище"
                                className="transparent-input col-10"
                            />
                            <hr className="input_line signin-input-line col-12" />
                        </div>
                        <div className="col-12 row " id="text-parent">
                            <div
                                className="date_text text-align-center"
                                id="birthday-text"
                            >
                                Дата народження
                            </div>
                        </div>
                        <div
                            className="col-10 col-md-7 row input-image justify-content-right"
                            id="picker-parent"
                        >
                            <img
                                src={Calendar}
                                alt="person image"
                                className="col-2 mozilla_calendar"
                            />
                            <input
                                min="1900-01-01"
                                max="2005-01-01"
                                id="date"
                                type="date"
                                id="birthday"
                                name="birthday"
                                class="transparent-input col-10 date_input"
                                required
                            />
                            <span class="validity"></span>
                            <hr className="input_line signin-input-line col-12" />{' '}
                        </div>
                        <div className="gender_container col-9 col-sm-9 col-md-7 row justify-content-center">
                            <div className="group col-4">
                                <input
                                    onClick={handleChanage}
                                    checked={formData.gender == 'male'}
                                    className="gender_checks"
                                    name="gender"
                                    type="checkbox"
                                    id="xd"
                                    value="male"
                                />
                                <label for="xd"></label>
                            </div>

                            <div className="group col-4">
                                <input
                                    onClick={handleChanage}
                                    checked={formData.gender == 'female'}
                                    type="checkbox"
                                    name="gender"
                                    id="figma"
                                    className="gender_checks"
                                    value="female"
                                />
                                <label for="figma"></label>
                            </div>

                            <div className="group col-4">
                                <input
                                    onClick={handleChanage}
                                    checked={formData.gender == 'other'}
                                    type="checkbox"
                                    name="gender"
                                    id="sketch"
                                    className="gender_checks"
                                    value="other"
                                />
                                <label for="sketch"></label>
                            </div>
                        </div>

                        <p className="col-9 gender_text text-align-center">
                            Стать
                        </p>
                        <div className="genders-labels col-9 col-md-7 row justify-content-center">
                            <div className=" col-4 text-align-center">
                                чоловіча
                            </div>
                            <div className=" col-4 text-align-center">
                                жіноча
                            </div>
                            <div className=" col-4 text-align-center">інше</div>
                        </div>
                    </div>
                </form>
                <div className="easy_nav_box col-12 row justify-content-right">
                    <div className="col-9" />
                    <Link to="/registration/signup1" className="col-3 easy_nav">
                        Далі
                        <img src={Caret} alt="tick image" className="col-3" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SignUpForm1)
