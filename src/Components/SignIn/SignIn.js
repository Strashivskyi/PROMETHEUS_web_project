import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../Firebase/firebase';
import '../Login/Login1.css';
import './SignIn.css';
import { AuthContext } from '../../Firebase/AuthSetup/Auth';
import { Link } from 'react-router-dom';
import MobileHeader from '../Header/MobileHeader'
import Logo from '../../assets/Logo.svg';
import SignOut from '../../assets/SignOut.svg';

function signOut() {
    localStorage.setItem("user",'@gmail')
    app.auth().signOut()
    
}

function SignIn({ history }) {
    const { currentUser } = useContext(AuthContext)
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault()
            const { email, password } = event.target.elements
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value)
                if (currentUser.emailVerified == true) {
                    history.push('/home')

                    localStorage.setItem('user', currentUser.email)
                } else {
                    alert('please verify your email')
                }
            } catch (error) {}
        },
        [history]
    )
    if (currentUser && currentUser.emailVerified == true) {
        localStorage.setItem('user', currentUser.email)
        return <Redirect to="/home" />
    }
    localStorage.setItem('profession', '')
    return (
        <>
            <MobileHeader/>
            
            <div className="image-form-division">
                <div className="image" />
                <div className="form">
                    <div className="sign-in-text"> Увійти на сайт</div>
                    <form className="login_form" onSubmit={handleLogin}>
                        <input
                            className="login_text_input"
                            type="text"
                            id="fname"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            className="login_text_input_second"
                            type="password"
                            id="lname"
                            name="password"
                            placeholder="Пароль"
                        />
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
                            Зареєстуватись
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
        </>
    )
}
export default withRouter(SignIn)
