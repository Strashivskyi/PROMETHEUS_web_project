import React, {useCallback, useContext} from 'react'
import {withRouter, Redirect} from 'react-router'
import app from '../../Firebase/firebase'
import './SignIn2.css'
import {AuthContext} from '../../Firebase/AuthSetup/Auth'
import {Link} from 'react-router-dom'
import MobileHeader from '../Header/MobileHeader'
import toast, {Toaster} from 'react-hot-toast'
import Logo from '../../assets/image 27.svg'
import Email from '../../assets/email_signup.svg'
import Password from '../../assets/password_signup.svg'

function SignIn({history}) {
    const {currentUser} = useContext(AuthContext)
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault()
            const {email, password} = event.target.elements

            const db = app.firestore()
            await db
                .collection('Users')
                .where('Email', '==', email.value)
                .onSnapshot((snapshot) => {
                    if (snapshot.size) {
                        snapshot.docs.map((doc) => {
                            localStorage.setItem(
                                'proffesion',
                                doc.data().Profession
                            )
                        })
                    } else {
                        console.log('Немає професії')
                    }
                })

            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                if (currentUser.emailVerified == true) {
                    await db
                        .collection('Users')
                        .where('Email', '==', email.value)
                        .onSnapshot((snapshot) => {
                            if (snapshot.size) {
                                snapshot.docs.map((doc) => {
                                    localStorage.setItem(
                                        'proffesion',
                                        doc.data().Profession
                                    )
                                })
                            } else {
                                console.log('Немає професії')
                            }
                        })

                    localStorage.setItem('user', currentUser.email)
                    history.push('/home')
                } else {
                    toast.loading(
                        'Будь ласка, підтвердьте свою електронну пошту...'
                    )
                }
            } catch (error) {
                if (!error.toString().includes('TypeError')) {
                    toast.error(error.toString())
                }
            }
        },
        [history]
    )
    if (currentUser && currentUser.emailVerified == true) {
        localStorage.setItem('user', currentUser.email)
        return <Redirect to="/home" />
    }
    return (
        <>
            <MobileHeader />

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 signin-image-container">
                        <img
                            src={Logo}
                            alt="big logo"
                            class="authentification_logo"
                        />
                    </div>

                    <div class="col-12 col-sm-9 col-lg-6 signin-content-container row justify-content-center">
                        <div class="col-12 text-align-center enter-site">
                            {' '}
                            Увійти на сайт
                        </div>
                        <form
                            class="col-9 col-sm-8 col-lg-7 row justify-content-center signin_form"
                            onSubmit={handleLogin}
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
                                <hr className="input_line col-12" />
                            </div>
                            <div class="col-12 row input-image">
                                <img
                                    src={Password}
                                    alt="envelope image"
                                    className="signin-icons  col-4 col-lg-3"
                                />
                                <input
                                    type="password"
                                    id="lname"
                                    name="password"
                                    placeholder="Пароль"
                                    className="transparent-input col-8 col-lg-9"
                                />
                                <hr className="input_line signin-input-line col-12" />
                            </div>
                            <input
                                class="signin-input signin-position-input col-11"
                                type="submit"
                                value="Увійти"
                            />
                        </form>
                        <div className="element-align-center still_no_acc">
                            <span>Досі немає акаунту? &nbsp;&nbsp;&nbsp;</span>{' '}
                            <Link className="login_link_reg" to="/registration">
                                Зареєструватись
                            </Link>
                        </div>
                        <div className="element-align-center forgot_password">
                            <span>Забули пароль? &nbsp;&nbsp;&nbsp;</span>{' '}
                            <Link
                                className="login_link_reg"
                                to="/forgetPassword"
                            >
                                Відновити пароль
                            </Link>
                        </div>
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
export default withRouter(SignIn)
