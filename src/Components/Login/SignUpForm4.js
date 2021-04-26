import React, {useCallback, useState} from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import './SignUpForm4.css'
import {withRouter} from 'react-router'
import app from '../../Firebase/firebase'
import {Link} from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
import Email from '../../assets/email_signup.svg'
import Password from '../../assets/password_signup.svg'
import Phone from '../../assets/phone_signup.svg'
import './../Authentification/SignIn2.css'
import CaretLeft from '../../assets/CaretLeft.svg'
import './SignUpForm2.css'

function SignUpForm4({history}) {
    localStorage.setItem('step', 3)
    const handleSignUp = useCallback(
        async (event) => {
            event.preventDefault()
            const {
                email,
                password,
                passwordCheck,
                phone,
            } = event.target.elements
            try {
                if (password.value === passwordCheck.value) {
                    await app
                        .auth()
                        .createUserWithEmailAndPassword(
                            email.value,
                            password.value
                        )

                    await app.auth().currentUser.sendEmailVerification()

                    addInputRegistr()
                    history.push('/')
                } else {
                    toast.error('Будь ласка, перевірте ваш пароль')
                }
            } catch (error) {
                toast.error('Помилка')
            }
        },
        [history]
    )

    const [phone, setPhoneNumber] = useState('')
    console.log(phone)
    localStorage.setItem('PhoneNumber', phone)

    const [email, setEmail] = useState('')
    localStorage.setItem('userEmail', email)
    console.log(email)
    return (
        <div class="container">
            <div class="row justify-content-center">
                <LoginNavigation class="col-6" />
                <form className="form-itself col-12 row justify-content-center">
                    <div className="col-12 row justify-content-center">
                        <div class="col-10 col-md-7 row input-image">
                            <img
                                src={Email}
                                alt="person image"
                                className="signin-icons col-3"
                            />
                            <input
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                type="text"
                                id="fname"
                                name="email"
                                placeholder="E-mail"
                                className="transparent-input col-9"
                            />
                            <hr className="input_line signin-input-line col-12" />
                        </div>
                        <div class="col-10 col-md-7 row input-image">
                            <img
                                src={Password}
                                alt="person image"
                                className="signin-icons col-3"
                            />
                            <input
                                type="password"
                                id="fname"
                                name="password"
                                placeholder="Пароль"
                                className="transparent-input col-9"
                            />
                            <hr className="input_line signin-input-line col-12" />
                        </div>
                        <div class="col-10 col-md-7 row input-image">
                            <img
                                src={Password}
                                alt="person image"
                                className="signin-icons col-3"
                            />
                            <input
                                type="password"
                                id="fname"
                                name="passwordCheck"
                                placeholder="Підтвердження паролю"
                                className="transparent-input col-9"
                            />
                            <hr className="input_line signin-input-line col-12" />
                        </div>
                        <div class="col-10 col-md-7 row input-image signup4">
                            <img
                                src={Phone}
                                alt="person image"
                                className="signin-icons col-3"
                            />
                            <input
                                onChange={(event) =>
                                    setPhoneNumber(event.target.value)
                                }
                                type="text"
                                id="lname"
                                name="phone"
                                placeholder="Номер телефону"
                                className="transparent-input col-9 "
                            />
                            <hr className="input_line signin-input-line col-12" />
                        </div>
                    </div>
                    <div className="col-12 row justify-content-center ">
                        <input
                            class="signin-input col-6"
                            type="submit"
                            value="Зареєструватись"
                        />
                    </div>
                    <Toaster
                        position="bottom-top"
                        reverseOrder={false}
                        toastOptions={{
                            style: {
                                minWidth: '350px',
                                minHeight: '60px',
                                paddingLeft: '20px',
                            },
                            error: {
                                duration: 5000,
                                icon: '⚠️',
                            },
                        }}
                    />
                </form>
                <div className="easy_nav_box_3 col-12 row">
                    <Link to="/registration/signup1" className="col-3 easy_nav">
                        <img
                            src={CaretLeft}
                            alt="tick image"
                            className="col-3"
                        />
                        Назад
                    </Link>
                    <div className="col-9" />
                </div>
            </div>
        </div>
    )
}
export default withRouter(SignUpForm4)
function addInputRegistr() {
    const db = app.firestore()
    db.collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('userEmail'))
        .set({
            Name: localStorage.getItem('Name'),
            Surname: localStorage.getItem('Surname'),
            Birthday: localStorage.getItem('Birthday'),
            Gender: localStorage.getItem('Gender'),
            Country: localStorage.getItem('Country'),
            City: localStorage.getItem('City'),
            Profession: localStorage.getItem('proffesion'),
            PhoneNumber: localStorage.getItem('PhoneNumber'),
            TelegramUserID: '',
        })
    db.collection('Users')
        .doc()
        .set({
            Email: localStorage.getItem('userEmail'),
            Profession: localStorage.getItem('proffesion'),
        })
}
