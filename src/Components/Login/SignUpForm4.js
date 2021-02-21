import React, { useCallback, useState } from 'react'
import './SignUpForm1.css'
import LoginNavigation from './Navigation/LoginNavigation'
import 'fontsource-dm-sans'
import './SignUpForm4.css'
import { withRouter } from 'react-router'
import app from '../../Firebase/firebase'

function SignUpForm4({ history }) {
    localStorage.setItem("step",4)
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
                    alert('Будь ласка, перевірте ваш пароль')
                }
            } catch (error) {
                alert(error)
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
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    className="inputE"
                    type="text"
                    id="fname"
                    name="email"
                    placeholder="Email"
                />
                <input
                    className="inputP"
                    type="text"
                    id="lname"
                    name="password"
                    placeholder="Пароль"
                />
                <input
                    className="inputCp"
                    type="text"
                    id="lname"
                    name="passwordCheck"
                    placeholder="Підтвердження паролю"
                />
                <input
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    className="inputPh"
                    type="text"
                    id="lname"
                    name="phone"
                    placeholder="Номер телефону"
                />
                <input
                    class="slide-hover-left-4"
                    type="submit"
                    value="Зареєструватись"
                />
            </form>
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
            Organization: localStorage.getItem('Organization'),
            PhoneNumber: localStorage.getItem('PhoneNumber'),
            TelegramUserID: '',
        })
}
