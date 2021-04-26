import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import app from '../../Firebase/firebase'
import toast, {Toaster} from 'react-hot-toast'
import './SignIn2.css'
import './ForgotPassword.css'
import Logo from '../../assets/image 27.svg'
import Email from '../../assets/email_signup.svg'

function recover(Email, history) {
    app.auth()
        .sendPasswordResetEmail(Email)
        .then(function (user) {
            toast.loading('Будь ласка, перевірте свою електронну пошту...')
            history.push('/')
        })
        .catch(function (e) {
            toast.error('Помилка')
        })
}

function ForgotPassword() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    console.log(email)
    return (
        <>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 signin-image-container">
                        <img
                            src={Logo}
                            alt="big logo"
                            class="authentification_logo"
                        />
                    </div>
                    <div class="col-12 col-sm-9 col-lg-6 signin-content-container row justify-content-centercol-12 col-sm-9 col-lg-6 signin-content-container row justify-content-center">
                        <div className="col-12 text-align-center recover-password">
                            Відновлення паролю
                        </div>
                        <div className="col-8 forgot-instructions">
                            Якщо Ви забули свій пароль, будь ласка, введіть
                            поточну електронну адресу і перевірте свою пошту.
                            Вам має прийти лист з посиланням,за яким Ви повинні
                            перейти і ввести новий пароль.
                        </div>
                        <form
                            class="col-9 col-sm-8 col-lg-7 row signin_form"
                            onSubmit={() => recover(email, history)}
                        >
                            <div class="col-12 row input-image">
                                <img
                                    src={Email}
                                    alt="envelope image"
                                    className="signin-icons col-4 col-lg-3"
                                />
                                <input
                                    type="text"
                                    id="fname"
                                    name="email"
                                    placeholder="Email"
                                    className="transparent-input col-8 col-lg-9"
                                />
                                <hr className="input_line forgot-input-line col-12" />
                            </div>
                            <input
                                class="signin-input col-11 go-up"
                                type="submit"
                                value="Відправити"
                            />
                        </form>
                        <Toaster
                            position="bottom-top"
                            reverseOrder={false}
                            toastOptions={{
                                style: {
                                    minWidth: '430px',
                                    minHeight: '60px',
                                    paddingLeft: '20px',
                                },
                                loading: {
                                    duration: 5000,
                                    icon: '✉️',
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword
