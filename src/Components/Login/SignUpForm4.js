import React, { useCallback, useState } from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import './SignUpForm4.css'
import { withRouter } from 'react-router'
import app from '../../Firebase/firebase'
import BackButtonComponent from '../Login/BackButtonComponent'
import {Link} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function SignUpForm4({ history }) {
    localStorage.setItem("step", 4)
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
                    toast.error('Будь ласка, перевірте ваш пароль',  );
                }
            } catch (error) {
                toast.error("Помилка")
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
        <div>
            <LoginNavigation />
            <form className="forth_form" onSubmit={handleSignUp}>
                <div className="contact_text">Контакти</div>
                <div className="inputE">
                    <input
                        onChange={(event) => setEmail(event.target.value)}
                        type="text"
                        id="fname"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="inputP">
                    <input
                        type="text"
                        id="lname"
                        name="password"
                        placeholder="Пароль"
                    />
                </div>
                <div className="inputCp">
                    <input
                        type="text"
                        id="lname"
                        name="passwordCheck"
                        placeholder="Підтвердження паролю"
                    />
                </div>
                <div className="inputPh">
                    <input
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        type="text"
                        id="lname"
                        name="phone"
                        placeholder="Номер телефону"
                    />
                </div>
                <input
                    class="slide-hover-left-4"
                    type="submit"
                    value="Зареєструватись"
                />
                <Toaster position="bottom-top" reverseOrder={false}
                         toastOptions={{
                             style: {
                                 minWidth: '350px',
                                 minHeight: '60px',
                                 paddingLeft: '20px'
                             },
                             error:{
                                 duration : 5000,
                                 icon: '⚠️'
                             }

                             }}
                />
            </form>
            <Link
                to="/registration/signup3"
            >
                <BackButtonComponent />

            </Link>
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
        db.collection("Users")
        .doc()
        .set({
            Email:localStorage.getItem('userEmail'),
            Profession: localStorage.getItem('proffesion'),
        })
}
