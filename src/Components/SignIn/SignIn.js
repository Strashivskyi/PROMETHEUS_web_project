import React, { useCallback, useContext } from 'react'
import { withRouter, Redirect } from 'react-router'
import app from '../../Firebase/firebase'
import '../Login/Login1.css'
import './SignIn.css'
import { AuthContext } from '../../Firebase/AuthSetup/Auth'
import { Link } from 'react-router-dom'
import MobileHeader from '../Header/MobileHeader'

function SignIn({ history }) {
    const { currentUser } = useContext(AuthContext)
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault()
            const { email, password } = event.target.elements

            const db = app.firestore()
            await db.collection('Users').where("Email", '==', email.value).onSnapshot((snapshot) => {
                if (snapshot.size) {

                    snapshot.docs.map((doc) => {
                        localStorage.setItem("proffesion",doc.data().Profession)
                    })
                } else {
                    console.log('Немає професії')
                }
            })
                    // .collection('Patient')
                    // .doc(localStorage.getItem('child'))
                    // .collection('Protocols')
                    // .doc(localStorage.getItem('program'))
                    // .collection('Stimulus')
                    // .onSnapshot((snapshot) => {
                    //     if (snapshot.size) {
                    //         setStimulus(
                    //             snapshot.docs.map((doc) => ({
                    //                 ...doc.data(),
                    //                 id: doc.id,
                    //             }))
                    //         )
                    //         console.log('Сука ')
                    //     } else {
                    //         console.log('Сука1')
                    //     }
                    // })
               
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                if (currentUser.emailVerified == true) {
                    
                    await db.collection('Users').where("Email", '==', email.value).onSnapshot((snapshot) => {
                        if (snapshot.size) {
        
                            snapshot.docs.map((doc) => {
                                localStorage.setItem("proffesion",doc.data().Profession)
                            })
                        } else {
                            console.log('Немає професії')
                        }
                    })

                    localStorage.setItem('user', currentUser.email)
                    history.push('/home')
                } else {
                    alert('please verify your email')
                }
            } catch (error) {
                if (!error.toString().includes("TypeError")) {
                    alert(error)
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
            <div className="light_blue_back">
            <div className="image-form-division">
                <div className="image" />
                <div className="form">
                    <div className="sign-in-text"> Увійти на сайт</div>
                    <form className="login_form" onSubmit={handleLogin}>
                    <div className="mobile_signin_label">Email</div>
                    <div className="login_text_input">
                    <input
                        type="text"
                        id="fname"
                        name="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mobile_signin_label">Пароль</div>
                <div className="login_text_input_second">

                        <input
                            type="password"
                            id="lname"
                            name="password"
                            placeholder="Пароль"
                        />
                </div>
                        <input
                            class="slide-hover-left-3"
                            type="submit"
                            value="Увійти"
                        />
                    </form>
                    <div className="still_no_acc">
                        <span className="still_no_acc_text">
                            Досі немає акаунту? &nbsp;&nbsp;&nbsp;
                        </span>{' '}
                        <Link className="login_link_reg" to="/registration">
                            Зареєструватись
                        </Link>
                    </div>
                    <div className="forgot_password">
                        <span className="forgot_password_text">
                            Забули пароль? &nbsp;&nbsp;&nbsp;
                        </span>{' '}
                        <Link className="login_link_reg" to="/forgetPassword">
                            Відновити пароль
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default withRouter(SignIn)
